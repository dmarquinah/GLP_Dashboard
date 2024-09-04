<template>
  <div class="flex flex-col space-y-6 md:space-y-4">
    <h1 class="page-title">{{ t('settings.title') }}</h1>
    <div class="flex flex-col p-4 space-y-4 bg-backgroundSecondary rounded-lg">
      <h3 class="h3">{{ t('settings.theme') }}</h3>
      <ThemeSwitcher />
    </div>
    <div class="flex flex-col p-4 space-y-4 bg-backgroundSecondary rounded-lg">
      <h3 class="h3">{{ t('settings.general-preferences') }}</h3>
      <LanguageSwitcher />
    </div>
    <VaAlert class="rounded-lg p-4 m-0" closeable color="info">
      <template #icon>
        <VaIcon size="26px" name="mso-notifications_active" />
      </template>
      <div class="flex flex-col space-y-2">
        <p class="text-regularLarge font-bold">{{ t('settings.notifications.alert-title') }}</p>
        <p class="text-regularMedium">{{ t('settings.notifications.alert-subtitle') }}</p>
      </div>
    </VaAlert>
    <Notifications />
  </div>
</template>
<script lang="ts" setup>
import LanguageSwitcher from './language-switcher/LanguageSwitcher.vue'
import ThemeSwitcher from './theme-switcher/ThemeSwitcher.vue'
import Notifications from './notifications/Notifications.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
