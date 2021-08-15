import {NewsItemState, NewsState} from "../../lib/interfaces/news.interface";
import {initialNewsState, NewsActions, newsReducer} from "./news.index";
import {NavigationActions} from "../router/router.reducer";

// @ts-ignore
export function makeScaffoldState(): NewsState {
  return {
    selectedNews: {
      storyID: 28140310,
      storyTitle: 'Thank the Babylonians, not Pythagoras, for trigonometry',
      storyURL: 'https://www.dw.com/en/thank-the-babylonians-not-pythagoras-for-trigonometry/a-58820147',
      storyImageURL: 'https://pixabay.com/get/g3bd1fc92331e61b70c8c942f84c974ca629718d86e902d4109bee4df6f972c4225abf1d61bd6e2672f6daac7f129c9d136751501b3f72ad5e0bdda37029ddc3b_1280.jpg',
      storyTimestamp: '11 Aug, 2021',
      storyScore: 4,
      authorId: 'Tomte',
      authorKarmaScore: 81112
    },
    items: [
      {
        storyID: 28140310,
        storyTitle: 'Thank the Babylonians, not Pythagoras, for trigonometry',
        storyURL: 'https://www.dw.com/en/thank-the-babylonians-not-pythagoras-for-trigonometry/a-58820147',
        storyImageURL: 'https://pixabay.com/get/g3bd1fc92331e61b70c8c942f84c974ca629718d86e902d4109bee4df6f972c4225abf1d61bd6e2672f6daac7f129c9d136751501b3f72ad5e0bdda37029ddc3b_1280.jpg',
        storyTimestamp: '11 Aug, 2021',
        storyScore: 4,
        authorId: 'Tomte',
        authorKarmaScore: 81112
      },
      {
        storyID: 28147787,
        storyTitle: 'Rodney Brooks: Intelligence Without Representation (1987) [pdf]',
        storyURL: 'http://people.csail.mit.edu/brooks/papers/representation.pdf',
        storyImageURL: '\'../../../../assets/images/default.jpg\'',
        storyTimestamp: '11 Aug, 2021',
        storyScore: 7,
        authorId: 'wrycoder',
        authorKarmaScore: 2126
      }
    ]
  };
}

describe('news reducer tests', () => {
  it('NewsActions.FETCHED_NEWS should set the composed news to the state', () => {
    const composedNews: NewsItemState[] = makeScaffoldState().items;
    const resultState = newsReducer(initialNewsState, { type: NewsActions.FETCHED_NEWS, payload: composedNews });

    expect(resultState.items).toEqual(makeScaffoldState().items);
  });
  it('NewsActions.SET_SELECTED_NEWS should set selected news item to the state', () => {
    const selectedNews: NewsItemState = makeScaffoldState().selectedNews;
    const resultState = newsReducer(initialNewsState, { type: NewsActions.SET_SELECTED_NEWS, payload: selectedNews });

    expect(resultState.selectedNews).toEqual(makeScaffoldState().selectedNews);
  });
  it('NavigationActions.GO_BACK_CLICKED should reset the selected news from the state', () => {
    const selectedNews: NewsItemState = makeScaffoldState().selectedNews;
    const resultState = newsReducer(initialNewsState, { type: NewsActions.SET_SELECTED_NEWS, payload: selectedNews });
    const resultStateAfterGoBack = newsReducer(resultState, { type: NavigationActions.GO_BACK_CLICKED });

    expect(resultStateAfterGoBack.selectedNews).toEqual(initialNewsState.selectedNews);
  });
});
