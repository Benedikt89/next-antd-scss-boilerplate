import {Actions} from "../redux";
import {
  appActionTypes
} from "./actions";

export interface AppState {
  isFetching: {[key: string]: boolean}
  error: {[key: string]: { message: string }}
}

export const initialState: AppState = {
  isFetching: {},
  error: {},
};


const appReducer = (state: AppState = initialState, action: Actions):AppState => {
  switch (action.type) {
    //setting fetching and frozen status
    case appActionTypes.SET_IS_FETCHING: {
      if (state.isFetching[action.key] && !action.status) {
        let newState = {...state};
        delete newState.isFetching[action.key];
        return newState
      }
      if (!state.isFetching[action.key] && action.status) {
        return {
          ...state,
          isFetching: {...state.isFetching, [action.key]: action.status},
        };
      } else return state;
    }

    /* ====================
      set error by key
     ==================== */
    case appActionTypes.SET_ERROR: {
      if (state.error[action.key] && !action.message) {
        let newState = {...state};
        delete newState.error[action.key];
        return newState
      }
      if (action.message) {
        return {
          ...state,
          error: {...state.error, [action.key]: {message: action.message}},
        };
      } else return state;
    }
    default:
      return state;
  }
};


export default appReducer;