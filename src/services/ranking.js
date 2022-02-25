import request from './axios'

export const getTopList = () => {
  return request({
    url: "/toplist"
  })
}

export function getRankingList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
