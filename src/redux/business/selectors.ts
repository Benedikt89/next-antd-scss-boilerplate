import {State} from "@Redux/redux";
import {Business} from "@Interfaces/business";

export const selectBusinessInfo = (state: State): Business | null => state.business.data;