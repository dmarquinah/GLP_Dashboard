import apiClient from '../client/api-client'
import { ILoginDataBody, ILoginDataResponse } from './auth-interfaces'

export const postAuthLogin = async (body: ILoginDataBody) => {
  return await apiClient.post<ILoginDataResponse>('auth/login', body)
}
