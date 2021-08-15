import {environment} from "../../../environments/environment";
import {StoryItemState} from "../../lib/interfaces/story.interface";
import {AuthorState} from "../../lib/interfaces/author.interface";
import {NewsAction, NewsActions} from "./news.index";
import {NewsItemState} from "../../lib/interfaces/news.interface";
import {formatTimestamp} from "../../util/time.util";
import {getRandomizedRange} from "../../util/randomize.util";
import {trimStoryTitle} from "../../util/trim.util";
import {defaultImageURL} from "../../util/constants.util";

export function actionSetNews(news: NewsItemState[]): NewsAction {
  return {
    type: NewsActions.FETCHED_NEWS,
    payload: news
  };
}

export function actionSetSelectedNews(news: NewsItemState): NewsAction {
  return {
    type: NewsActions.SET_SELECTED_NEWS,
    payload: news
  };
}

export function actionComposeNews(): (dispatch, getState) => Promise<void> {
  return async (dispatch, getState) => {

    const topStoryIDs = await actionFetchTopStories();

    // create a random range for 10 news
    const [min, max] = getRandomizedRange(topStoryIDs.length);

    // fetch all top stories at once
    const topStories: StoryItemState[] = await Promise.all(
      (topStoryIDs as number[]).slice(min, max).map(async (storyId: number) => {
        return (await actionFetchStoryItem(storyId)) as StoryItemState;
      })
    );

    // fetch all author details at once
    const authorDetails: AuthorState[] = await Promise.all(
      (topStories as StoryItemState[]).map(async (storyItem: StoryItemState) => {
        return (await actionFetchAuthor(storyItem.by)) as AuthorState;
      })
    );

    // construct the news collection
    const news: NewsItemState[] = await Promise.all(
      topStories.map(async (story: StoryItemState) => {

      const author: AuthorState = authorDetails.find( (author: AuthorState) => (author.id === story.by) );
      // trim the first word of the story title and try to find a related image via Pixabay search
      const keyWord = trimStoryTitle(story.title);
      const result = await dispatch(actionGetPixabayImages(keyWord));

      return {
        storyID: story.id,
        storyTitle: story.title,
        storyURL: story.url,
        storyImageURL: result.hits[0]?.largeImageURL || defaultImageURL,
        storyTimestamp: formatTimestamp(story.time),
        storyScore: story.score,
        authorId: author.id,
        authorAbout: author.about,
        authorKarmaScore: author.karma
      }
    })
    );

    // sort the news ascending by the story score
    news.sort((a, b) => a.storyScore - b.storyScore);
    dispatch(actionSetNews(news));
  };
}

async function actionFetchTopStories(): Promise<any> {

  try {
    const response = await fetch( environment.topStoriesURL, {
      method: 'GET',
      headers: {'Content-Type': 'application/json; charset=utf-8'}
    });
    return response.json();
  } catch (err) {
    throw new Error('Error while getting the top stories: ' + err);
  }
}

async function actionFetchStoryItem(storyID: number): Promise<StoryItemState> {

  try {
    const response = await fetch( environment.storyItemURL + storyID + '.json', {
      method: 'GET',
      headers: {'Content-Type': 'application/json; charset=utf-8'}
    });
    return response.json();
  } catch (err) {
    throw new Error('Error while getting the story item: ' + err);
  }
}

async function actionFetchAuthor(authorID: string): Promise<any> {

  try {
    const response = await fetch( environment.authorURL + authorID + '.json', {
      method: 'GET',
      headers: {'Content-Type': 'application/json; charset=utf-8'}
    });
    return response.json();
  } catch (err) {
    throw new Error('Error while getting the author: ' + err);
  }
}

export function actionGetPixabayImages(query: string): (dispatch, getState) => Promise<any[] | any> {
  return async (dispatch, getState) => {
    const orientation =  'vertical';
    const page = 1;
    const perPage = 5;
    const safeSearch = true;

    const url = environment.pixabayApiRoot + `&q=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}&safesearch=${safeSearch}&image_type=photo&orientation=${orientation}`;

    try {
      const response = await fetch(url, { method: 'GET' });
      if (response.status < 200 || response.status >= 300) {
        return [];
      }
      return response.json();

    } catch (err) {
      throw new Error('Error while fetching pixabay images: ' + err);
    }
  };
}
