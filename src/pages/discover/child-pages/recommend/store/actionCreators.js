import * as actionTypes from "./constants";

import {
  getTopBanner,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getResidentSinger
} from "@/services/recommend";

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  banners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});

const changeTopUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist,
});

const changeTopNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist,
});

const changeTopOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist,
});

const changeResidentSingerAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  residentSinger: res.artists
})

export const getBanner = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeTopNewListAction(res));
          break;
        case 2:
          dispatch(changeTopOriginListAction(res));
          break;
        case 3:
          dispatch(changeTopUpListAction(res));
          break;
        default:
      }
    });
  };
};

export const getResidentSingerAction = (limit, cat) => {
  return dispatch => {
    getResidentSinger(limit, cat).then(res => {
      dispatch(changeResidentSingerAction(res))
    })
  }
}
