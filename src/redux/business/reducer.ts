import {businessActionTypes} from "./actions";

import {Actions} from "@Redux/redux";
import {Business} from "@Interfaces/business";


interface BusinessState {
  data: Business | null;
}

const reducer = (state: BusinessState = {data: null}, action: Actions) => {
  switch (action.type) {
    case businessActionTypes.SET_BUSINESS_INFO:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default reducer;