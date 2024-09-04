import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', {
  state: () => {
    return {
      notifications: {
        whatsappMessaging: {
          name: 'send-whatsapp',
          isEnabled: true,
        },
      },
    }
  },
})
