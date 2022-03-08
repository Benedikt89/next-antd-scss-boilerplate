export const appActionTypes = {
  SET_IS_FETCHING: 'app/SET_IS_FETCHING',
  SET_ERROR: 'app/SET_ERROR',
} as const;

export type AppActions = SetFetching | SetError

//interfaces
interface SetFetching {
  type: typeof appActionTypes.SET_IS_FETCHING,
  key: string
  status: boolean
}
interface SetError {
  type: typeof appActionTypes.SET_ERROR,
  key: string
  message: null | string
}

//Internal ACTIONS CREATORS
export const _setFetching = (key: string, status: boolean): SetFetching =>
  ({type: appActionTypes.SET_IS_FETCHING, key, status});

export const _setError = (key: string, message: string | null): SetError =>
  ({type: appActionTypes.SET_ERROR, key, message});

/* ====================
  thunk actions
 ==================== */