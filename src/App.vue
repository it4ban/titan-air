<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <HeaderItem />

  <RouterView />

  <FooterItem />
</template>

<style scoped lang="scss"></style>
