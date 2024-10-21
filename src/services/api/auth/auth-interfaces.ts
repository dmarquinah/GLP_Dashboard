import { IUserData } from '../user/user-interfaces'

export interface ILoginDataBody {
  email: string
  password: string
  keepLoggedIn: boolean
}

export interface ILoginDataResponse {
  access_token: string
  user: IUserData
}
