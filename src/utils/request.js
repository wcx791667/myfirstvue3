import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { message } from 'ant-design-vue'

let baseURL=  process.env.VUE_APP_BASE_API


const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    let accessToken = sessionStorage.getItem('accessToken')
    if (accessToken){
      config.headers['accessToken'] = accessToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use((response) => {
    const { data, config } = response
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
