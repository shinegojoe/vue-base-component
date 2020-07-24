import axios from 'axios'
import apiList from '@/apis/apiList.js'

export function getProjects () {
  return axios({
    method: 'get',
    url: apiList.projects
  })
}

export function postProject (data) {
  return axios({
    method: 'post',
    url: apiList.projects,
    data
  })
}

