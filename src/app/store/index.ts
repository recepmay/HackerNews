import {
  AnyAction,
  applyMiddleware,
  createStore,
  Middleware,
  Reducer,
  Store,
  StoreEnhancer
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createEffectsMiddleware, EffectMethod } from './effects/redux-effects';
import { routerReducer } from "./router/router.reducer";
import { initEffect } from "./effects/init.effect";
import { NewsState } from "../lib/interfaces/news.interface";
import { newsReducer } from "./news/news.index";

export interface AppState {
  router?: string;
  news?: NewsState;
}

export function rootReducer(state: AppState, action: AnyAction): AppState {
  return {
    router: routerReducer(state, action),
    news: newsReducer(state.news, action)
  }
}

export function createAppStore(): Store<AppState> {
  const effects: EffectMethod[] = [ initEffect ]; // add effects if any

  let enhancer: any[] = [];
  if (typeof window !== 'undefined') {
    const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
    if (reduxDevTools !== undefined) {
      enhancer = [...enhancer, reduxDevTools({ serialize: true })];
    }
  }
  let initState = {};

  const middleWares: Middleware[] = [createEffectsMiddleware(effects), thunkMiddleware];
  const middlewareEnhancer: StoreEnhancer = applyMiddleware(...middleWares);

  const enhancers = [ middlewareEnhancer ];
  const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers);

  return createStore(
    rootReducer as Reducer,
    initState,
    composedEnhancers
  );
}
