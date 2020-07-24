import apiList from '@/apis/apiList.js'
import { get, post, put, remove } from '@/apis/axiosHelper.js'

export function getLanguages () {
  return get(apiList.languages)
}

export function postLanguages (data) {
  return axios({
    method: 'post',
    url: apiList.languages,
    data
  })
}

export function putLanguage (id, data) {
  return axios({
    method: 'put',
    url: `${apiList.language}/${id}`,
    data
  })
}

export function deleteLanguage (id) {
  return axios({
    method: 'delete',
    url: `${apiList.language}/${id}`

  })
}
