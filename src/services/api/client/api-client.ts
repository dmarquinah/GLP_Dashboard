import { ref } from 'vue'
import { retrieveMockGetData, retrieveMockPostData } from '../mock/mock-queries'
import { IFetchClient } from './fetch.interface'
import networkFetchClient from './network-client'

const use_mock = ref(import.meta.env.USE_MOCK)
const url = ref(import.meta.env.VITE_APP_API_URL)

class ApiClient implements IFetchClient {
  constructor(private networkClient: typeof networkFetchClient) {}

  async get<T>(path: string) {
    return await this.networkClient(path).get().json<T>()
  }

  async post<T>(path: string, body: unknown) {
    return await this.networkClient(path).post(body).json<T>()
  }
}

class MockClient implements IFetchClient {
  async get(path: string): Promise<any> {
    return retrieveMockGetData(path)
  }
  async post(path: string, body: unknown): Promise<any> {
    return await retrieveMockPostData(path, body)
  }
}

let apiClient: IFetchClient

if (use_mock.value || !url.value) {
  apiClient = new MockClient()
} else {
  apiClient = new ApiClient(networkFetchClient)
}

export default apiClient
