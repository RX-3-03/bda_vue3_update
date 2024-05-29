// 登录接口需要携带参数ts类型
export interface LoginFormData {
  username?: string
  password?: string
}

export interface loginForm {
  username?: string
  password?: string
}

export interface ResponseData {
  code?: number
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

export interface LoginResponseData extends ResponseData {
  data?: dataType
}

export interface user {
  checkUser: userInfo
}

export interface dataType {
  token: string
}

export interface userInfoResponseData extends ResponseData {
  data: user
}
