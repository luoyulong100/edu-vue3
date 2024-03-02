import axios, { type AxiosRequestHeaders } from 'axios'
import { useTokenStore } from '@/stores/myToken'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_URL
})

//请求拦截器
request.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {} as AxiosRequestHeaders
  }
  const store = useTokenStore()
  config.headers.Authorization = store.token.access_token
  return config
})

export default request
