<template>
  <VaAvatar size="large"> {{ store.nameInitials }}</VaAvatar>
  <div class="flex flex-col justify-center">
    <h2 class="text-[28px] md:text-[32px] leading-10 font-bold">{{ store.userName }}</h2>
    <div class="flex space-x-1 text-[13px] leading-4">
      <p>{{ t('profile.member-since') }}</p>
      <p>{{ store.memberSince }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useUserStore } from '../../../stores/user-store'

const { t } = useI18n()

const store = useUserStore()
</script>
