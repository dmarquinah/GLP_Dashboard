import { UseFetchReturn } from '@vueuse/core'

export interface IFetchClient {
  get<T>(path: string): Promise<UseFetchReturn<T>>
  post<T>(path: string, body: unknown): Promise<UseFetchReturn<T>>
}
