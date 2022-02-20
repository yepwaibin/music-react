import request from './axios.js'

export function getTopBanner() {
  return request({
    url: "/banner"
  })
}
