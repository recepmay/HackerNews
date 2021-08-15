import { RouterAction, routerReducer as nextPageLink } from '@angular-redux/router';
import { AnyAction } from 'redux';
import { AppState } from '..';
import { NewsActions} from "../news/news.index";

export const NavigationActions = {
  GO_BACK_CLICKED: Symbol('router/go_back_clicked')
};

export function actionGoBack(): any {
  return {
    type: NavigationActions.GO_BACK_CLICKED
  };
}

export function routerReducer(state: AppState, action: RouterAction | AnyAction): string {
    if (action.type === NewsActions.SET_SELECTED_NEWS) {
      return nextPageLink('details', action);
    }
    if (action.type === NavigationActions.GO_BACK_CLICKED) {
      return nextPageLink('/', action);
    }
    return nextPageLink('/', action);
}
