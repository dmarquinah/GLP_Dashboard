import { defineStore } from 'pinia'
import { postAuthLogin } from '../services/api/auth/auth-queries'
import { ILoginDataBody } from '../services/api/auth/auth-interfaces'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      isFetching: false,
      error: null,
    }
  },

  actions: {
    setJWTToken(token: string) {
      this.token = token
    },

    async login(body: ILoginDataBody) {
      const response = await postAuthLogin(body)
      console.log('data', response)
      if (response.error) {
        this.isFetching = true
        this.error = response.error.value
      }

      if (response.data.value) return response.data.value
      //return data
    },
  },

  getters: {
    getErrorMessage: (state) => {
      if (state.error) {
        return ``
      }
    },
  },
})
