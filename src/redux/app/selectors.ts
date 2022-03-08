import {State} from "../redux";

export const selectLoadingByKey = (state: State, key: string): boolean =>
  !!state.app.isFetching[key];

export const selectErrorByKey = (state: State, key: string): null | { message: string } =>
  state.app.error[key] ? state.app.error[key] : null;