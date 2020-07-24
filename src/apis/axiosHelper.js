import axios from 'axios'

export function get (url) {
  return axios({
    method: 'get',
    url: url
  })
}

export function post (url, data) {
  return axios({
    method: 'post',
    url,
    data
  })
}

export function put (url, data) {
  return axios({
    method: 'put',
    url,
    data
  })
}

export function remove (url) {
  return axios({
    method: ' delete',
    url
  })
}
