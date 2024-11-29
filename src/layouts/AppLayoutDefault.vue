<template>
  <HeaderItem />

  <slot />

  <FooterItem />
</template>

<script setup lang="ts">
import HeaderItem from '@/components/HeaderItem.vue'
import FooterItem from '@/components/FooterItem.vue'
</script>
