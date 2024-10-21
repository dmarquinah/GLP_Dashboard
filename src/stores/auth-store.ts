import { defineStore } from 'pinia'
import { postAuthLogin } from '../services/api/auth/auth-queries'
import { ILoginDataBody } from '../services/api/auth/auth-interfaces'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      isFetching: false,
    }
  },

  actions: {
    setJWTToken(token: string) {
      this.token = token
    },

    async login(body: ILoginDataBody) {
      const { isFetching, data } = await postAuthLogin(body)
      if (isFetching) this.isFetching = true

      console.log('data is:', data)
      return data
    },
  },
})
