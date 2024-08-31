<template>
  <div class="h-16 flex justify-center items-center">
    <RouterLink to="/" aria-label="Visit home page">
      <AppLogo />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import AppLogo from './components/logos/AppLogo.vue'
</script>
