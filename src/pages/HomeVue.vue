<template>
  <main class="home">
    <OneScreenItem />
    <TwoScreenItem />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { useScreenScroll } from '@/hooks'
import OneScreenItem from '@/components/OneScreenItem.vue'
import TwoScreenItem from '@/components/TwoScreenItem.vue'

const { handleCalculateSectionOffset, handleMouseWheel, handleTouchMove, handleTouchStart } =
  useScreenScroll()

onMounted(() => {
  handleCalculateSectionOffset()
  window.addEventListener('wheel', handleMouseWheel)
  window.addEventListener('touchstart', handleTouchStart)
  window.addEventListener('touchmove', handleTouchMove)
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleMouseWheel)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
})
</script>

<style scoped lang="scss">
.home {
  width: 100%;
}
</style>
