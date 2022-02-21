import request from "./axios.js";

export function getTopBanner() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommends(limit) {
  return request({
    url: "personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  });
}

export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
}
