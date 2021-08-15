import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppState} from "../index";
import {Action} from 'redux';
import {actionComposeNews} from "../news/news.actions";
import {NewsAction} from "../news/news.index";

export const APP_MODULE_INIT = Symbol('common/init');

export function actionInit(): Action {
  return { type: APP_MODULE_INIT };
}

export function initEffect(action: AnyAction, dispatch: ThunkDispatch<AppState, void, NewsAction>, getState: () => AppState): void {

  if (action.type === APP_MODULE_INIT) {
    dispatch(actionComposeNews()).then(r => {});
  }
}
