import axios from 'axios'

const baseURL = 'http://localhost:8090'

const instance = axios.create({
  baseURL,
  timeout: 7000,
  headers: {}
})

instance.interceptors.request.use(function (config) {
  // 加token
  return config
}, function (error) {
  return Promise.reject(error)
})


instance.interceptors.response.use(function (response) {
  let res = null
  // 数据过滤
  if(response.data && response.data.code === 0) {
    res = response.data.data
  }  
  return res
}, function (error) {
  return Promise.reject(error)
})

export default instance
