import request from '@/utils/request'

//用户登录-参数类型
type LoginInfo = {
  phone: String
  code?: String
  password: String
}
//用户登录-返回数据类型
type LoginResult = {
  success: boolean
  state: number
  massage: string
  content: string
}
//用户请求登录
export const login = (loginInfo: LoginInfo) => {
  return request<LoginResult>({
    method: 'POST',
    url: '/front/user/login',
    data: `phone=${loginInfo.phone}&password=${loginInfo.password}`
  })
}

//获取用户信息
type UserInfo = {
  success: boolean
  massage: string
  state: number
  content: {
    isUpdatePassword: boolean
    portrait: string
    userName: string
  }
}
export const getInfo = () => {
  return request<UserInfo>({
    method: 'GET',
    url: '/front/user/getInfo'
  })
}

//用户退出
export const userLogout = () => {
  return request({
    method: 'POST',
    url: '/front/user/logout'
  })
}
