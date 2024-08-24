<template>
  <svg :height="height" alt="Vuestic Admin" fill="none" viewBox="0 0 478 57" xmlns="http://www.w3.org/2000/svg">
    <text
      x="10"
      y="50"
      font-family=" 'Inter', Avenir, Helvetica, Arial, sans-serif"
      font-size="65"
      :fill="colorsComputed.start"
      font-weight="bold"
    >
      AltokeAdmin
    </text>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useColors } from 'vuestic-ui'

const { getColor } = useColors()

const props = withDefaults(
  defineProps<{
    height?: number
    start?: string
    end?: string
  }>(),
  {
    height: 18,
    start: 'primary',
    end: undefined,
  },
)

const colorsComputed = computed(() => {
  return {
    start: getColor(props.start),
    end: getColor(props.end || props.start),
  }
})
</script>
