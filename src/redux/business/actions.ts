import {ThunkDispatch} from "redux-thunk";
import {batch} from "react-redux";
import moment from "moment";

import {Business} from "@Interfaces/business";
import {fetchHandler} from "@Redux/fetchHandler";
import {Actions} from "@Redux/redux";

export const businessActionTypes = {
  SET_BUSINESS_INFO: 'business/SET_BUSINESS_INFO',
} as const;

export type CompanyActions = SetBusinessInfo;

//interfaces
interface SetBusinessInfo {
  type: typeof businessActionTypes.SET_BUSINESS_INFO,
  payload: Business
}


//Internal ACTIONS CREATORS
export const setBusinessInfo = (payload: Business): SetBusinessInfo =>
  ({ type: businessActionTypes.SET_BUSINESS_INFO, payload });



// /* ====================
//   thunk actions
//  ==================== */

function delay(t: number, v?: any) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t)
  });
}

export const getBusiness = (businessId?: string, query?: string) =>
  fetchHandler(
    `getBusiness=${businessId ?? ""}`,
    async (dispatch: ThunkDispatch<{}, {}, Actions>) => {
      await delay(800,() => console.log("res" + query));
      let data: Business = {
        id: "_company_id",
        title: "SAMOTSOH",
        rate: 4.7,
        reviewsCount: 263,
        cover: "/banner.png",
        address: "Engelbrektsgatan 3, 114 32 Stockholm",
        openAt: moment().set("hours", 9).set("minutes", 0).format(),
        closeAt: moment().set("hours", 18).set("minutes", 0).format(),
        phone: "08-34567",
        homePage: "samothson.samothson.com",
      };
      if (data) {
        batch(() => {
          dispatch(setBusinessInfo(data));
        });
        return true;
      }
    });

