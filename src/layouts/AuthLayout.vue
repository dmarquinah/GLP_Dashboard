<template>
  <VaLayout v-if="breakpoint.lgUp" class="h-screen">
    <template #left>
      <RouterLink
        class="bg-[var(--va-background-secondary)] h-full flex items-center justify-center"
        style="width: 35vw"
        to="/"
        aria-label="Visit homepage"
      >
        <AppLogo :height="28" start="#FFF" />
      </RouterLink>
    </template>
    <template #content>
      <main class="h-full flex items-center justify-center mx-auto max-w-[420px]">
        <RouterView />
      </main>
    </template>
  </VaLayout>

  <VaLayout v-else class="h-screen bg-[var(--va-background-secondary)]">
    <template #content>
      <div class="p-4">
        <main class="h-full flex flex-row items-center justify-start mx-auto max-w-[420px]">
          <div class="flex flex-col items-start">
            <RouterLink class="py-4" to="/" aria-label="Visit homepage">
              <AppLogo class="mb-2" start="#0E41C9" />
            </RouterLink>
            <RouterView />
          </div>
        </main>
      </div>
    </template>
  </VaLayout>
</template>

<script lang="ts" setup>
import { useBreakpoint } from 'vuestic-ui'
import AppLogo from '../components/navbar/components/logos/AppLogo.vue'

const breakpoint = useBreakpoint()
</script>
