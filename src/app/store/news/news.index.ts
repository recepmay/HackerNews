import { Action } from 'redux';
import { NewsItemState, NewsState } from "../../lib/interfaces/news.interface";
import {NavigationActions} from "../router/router.reducer";

export const initialNewsState: NewsState = {
  items: [],
  selectedNews: {
    storyID: 0,
    storyTitle: '',
    storyScore: 0,
    storyTimestamp: '',
    storyImageURL: '',
    storyURL: '',
    authorId: '',
    authorAbout: '',
    authorKarmaScore: 0
  }
};

export interface NewsAction extends Action {
  payload?: NewsItemState[] | NewsItemState;
  meta?: {
    data: any
  };
}

export const NewsActions = {
  FETCHED_NEWS: Symbol('news/fetched_news'),
  SET_SELECTED_NEWS: Symbol('news/set_selected_news')
};

export function newsReducer(state: NewsState = initialNewsState, action: NewsAction): NewsState {
  switch (action.type) {
    case NewsActions.FETCHED_NEWS: {
      return { ...state, items: action.payload as NewsItemState[] };
    }
    case NewsActions.SET_SELECTED_NEWS: {
      return { ...state, selectedNews: { ... action.payload as NewsItemState} };
    }
    case NavigationActions.GO_BACK_CLICKED: {
      return { ...state, selectedNews: { ... initialNewsState.selectedNews} };
    }
    default:
      return state;
  }
}
