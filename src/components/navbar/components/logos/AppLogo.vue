<template>
  <component :is="logoComponent"></component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useColors } from 'vuestic-ui'

import AppLogoDark from './AppLogoDark.vue'
import AppLogoLight from './AppLogoLight.vue'

const { currentPresetName } = useColors()

const logoComponent = computed(() => (currentPresetName.value == 'dark' ? AppLogoDark : AppLogoLight))

withDefaults(
  defineProps<{
    height?: number
    width?: number
    start?: string
    end?: string
  }>(),
  {
    height: 32,
    width: 172,
    start: 'primary',
    end: undefined,
  },
)
</script>
