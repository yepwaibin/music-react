import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_TOP_BNNAER:
      return state.set("topBanners", action.banners);
    case actionType.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    case actionType.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums)
      default:
      return state;
  }
};

export default reducer;
