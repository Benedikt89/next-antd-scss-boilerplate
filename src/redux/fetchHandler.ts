import { ThunkDispatch } from "redux-thunk";
import { batch } from "react-redux";
import { message } from "antd";

import { Actions, GetState } from "@Redux/redux";
import { selectLoadingByKey } from "@Redux/app/selectors";
import { _setError, _setFetching } from "@Redux/app/actions";

/* ====================
   function that covers all request actions with errors etc.
 ==================== */

export function fetchHandler(
  key: string,
  callback: (
    dispatch: ThunkDispatch<{}, {}, Actions>,
    getState: GetState
  ) => Promise<boolean | undefined>
) {
  return async function (
    dispatch: ThunkDispatch<{}, {}, Actions>,
    getState: GetState
  ) {
    try {
      const loading = selectLoadingByKey(getState(), key);
      if (!loading) {
        batch(() => {
          dispatch(_setError(key, null));
          dispatch(_setFetching(key, true));
        });
        const response = await callback(dispatch, getState);
        batch(() => {
          dispatch(_setFetching(key, false));
          if (!response) {
            dispatch(_setError(key, "Nothing Found"));
          }
        });
      }
    } catch (e) {
      const content = e.message
        ? e.message
        : e.data?.message
        ? e.data?.message
        : "Something went wrong. Try again later.";
      message.error(content);
      batch(() => {
        dispatch(_setError(key, content));
        dispatch(_setFetching(key, false));
      });
    }
  };
}
