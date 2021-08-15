import {initialNewsState, newsReducer} from "./news.index";
import {makeScaffoldState} from "./news.index.spec";
import {actionSetNews, actionSetSelectedNews} from "./news.actions";
import {selectNews, selectSelectedNews} from "./news.selectors";

fdescribe('news selector tests', () => {
  it('selectNews should return the news items after setting it via an action', () => {
    const state = newsReducer(initialNewsState, actionSetNews(makeScaffoldState().items));
    expect(selectNews({ news: state })).toEqual(makeScaffoldState().items);
  });
  it('selectSelectedNews should return the selected news item', () => {
    const state = newsReducer(initialNewsState, actionSetSelectedNews(makeScaffoldState().selectedNews));
    expect(selectSelectedNews({ news: state })).toEqual(makeScaffoldState().selectedNews);
  });
});
