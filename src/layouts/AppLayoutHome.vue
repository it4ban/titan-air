<template>
  <!-- <HomeHeader v-if="screenWidth >= 1120" /> -->
  <!-- <HeaderItem v-if="screenWidth < 1120" /> -->
  <HomeSidebar v-if="screenWidth >= 1120" />

  <slot />
</template>

<script setup lang="ts">
import HomeHeader from '@/components/HomeHeader.vue'
import HeaderItem from '@/components/HeaderItem.vue'
import HomeSidebar from '@/components/HomeSidebar.vue'

import { useBreakpoints } from '@/hooks'

const { screenWidth } = useBreakpoints()
</script>

<style scoped lang="scss"></style>
