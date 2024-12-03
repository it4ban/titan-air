<template>
  <main class="home">
    <OneScreenItem />
    <TwoScreenItem />
    <ThreeScreenItem />
    <FourScreenItem />
    <FiveScreenItem />
    <SixScreenItem />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, onUnmounted } from 'vue'

import { useScreenScroll } from '@/hooks'
import OneScreenItem from '@/components/OneScreenItem.vue'
import TwoScreenItem from '@/components/TwoScreenItem.vue'
import ThreeScreenItem from '@/components/ThreeScreenItem.vue'
import FourScreenItem from '@/components/FourScreenItem.vue'
import FiveScreenItem from '@/components/FiveScreenItem.vue'
import SixScreenItem from '@/components/SixScreenItem.vue'

const { handleCalculateSectionOffset, handleMouseWheel } = useScreenScroll()

onBeforeMount(() => {
  handleCalculateSectionOffset()
})

onMounted(() => {
  handleCalculateSectionOffset()

  window.addEventListener('wheel', handleMouseWheel)
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleMouseWheel)
})
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  overflow: hidden;

  @media (pointer: coarse) and (hover: none) {
    overflow: auto;
  }
}
</style>
