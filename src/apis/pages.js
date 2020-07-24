import axios from 'axios'
import apiList from '@/apis/apiList.js'

export function getPages () {
  return axios({
    method: 'get',
    url: apiList.pages
  })
}

export function postPage (data) {
  return axios({
    method: 'post',
    url: apiList.pages,
    data
  })
}

export function putPage (id, data) {
  return axios({
    method: 'put',
    url: `${apiList.page}/${id}`,
    data
  })
}

export function deletePage (id) {
  return axios({
    method: 'delete',
    url: `${apiList.page}/${id}`

  })
}
