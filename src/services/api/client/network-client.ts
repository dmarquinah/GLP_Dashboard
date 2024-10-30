import { createFetch } from '@vueuse/core'
import { ref } from 'vue'

import { useAuthStore } from '../../../stores/auth-store'

const url = ref(import.meta.env.VITE_APP_API_URL)

const networkFetchClient = createFetch({
  baseUrl: url,
  combination: 'chain',
  options: {
    beforeFetch({ options }) {
      const authStore = useAuthStore()

      if (authStore.token !== '') {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${authStore.token}`,
        }
      }

      return { options }
    },

    afterFetch(ctx) {
      // if the response contains a data property, return it
      if (ctx.data) {
        return ctx.data
      }

      return ctx
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

export default networkFetchClient
