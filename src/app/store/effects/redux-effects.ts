import { Middleware } from "redux";

export type EffectMethod = {
    (action: any, dispatch: any, getState: any): void
}

export function createEffectsMiddleware(effects: EffectMethod[] = []): Middleware {
    return ({ dispatch, getState }) => next => action => {
        const nextState = next(action);
        effects.forEach(effect => effect(action, dispatch, getState));
        return nextState;
    };
}
