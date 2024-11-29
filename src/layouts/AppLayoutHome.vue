<template>
  <HomeHeader />

  <HomeSidebar />

  <slot />
</template>

<script setup lang="ts">
import HomeHeader from '@/components/HomeHeader.vue'
import HomeSidebar from '@/components/HomeSidebar.vue'
</script>

<style scoped lang="scss"></style>
