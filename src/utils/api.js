import axios from './axios'

export function fetchUserList() {
  console.log('fetch user list') // eslint-disable-line
}

export function fetchQQ(params) {
  return axios({
    url: '/soso/fcgi-bin/client_search_cp',
    params,
    methods: 'GET'
  })
}
