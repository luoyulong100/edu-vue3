import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL
  // baseURL: 'https://mock.apifox.cn/m1/2401164-0-default'
})

export default request
