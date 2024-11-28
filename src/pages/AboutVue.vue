<template>
  <main class="about-us">
    <BannerItem
      :bannerImage="aboutUsImg"
      :bannerImageX2="aboutUsImgX2"
      :bannerStyle="{ backgroundImage: `url(${aboutUsBanner})` }"
    />
  </main>
</template>

<script setup lang="ts">
import BannerItem from '@/components/BannerItem.vue'

import aboutUsBanner from '@/assets/img/about-us/bg-top.jpg'
import aboutUsImg from '@/assets/img/about-us/about-logo.png'
import aboutUsImgX2 from '@/assets/img/about-us/about-logo@2x.png'
</script>

<style scoped lang="scss">
.about-us {
  width: 100%;
}
</style>
