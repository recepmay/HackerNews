import {AppState} from "../index";
import {NewsItemState} from "../../lib/interfaces/news.interface";

export function selectNews(state: AppState): NewsItemState[] {
  return state.news.items;
}

export function selectSelectedNews(state: AppState): NewsItemState {
  return state.news.selectedNews;
}
