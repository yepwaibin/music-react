import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  topBanners: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_TOP_BNNAER:
      return state.set("topBanners", action.banners);
    default:
      return state;
  }
};

export default reducer;
