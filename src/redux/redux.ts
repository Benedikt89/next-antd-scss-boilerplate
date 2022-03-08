import { useMemo } from "react";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import appReducer from "./app/reducer";
import businessReducer from "./business/reducer";
import { AppActions } from "./app/actions";
import { CompanyActions } from "./business/actions";

export const makeStore = (state) => {
  return configureStore({
    reducer: state
      ? state
      : {
          app: appReducer,
          business: businessReducer,
        },
    middleware: [thunkMiddleware],
  });
};

let store;

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export type Store = ReturnType<typeof makeStore>;

interface AppStore extends Store {
  dispatch: ThunkDispatch<{}, {}, Actions>;
}

export type State = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  Action<string>
>;

export type Actions = AppActions | CompanyActions;

export type GetState = () => State;
