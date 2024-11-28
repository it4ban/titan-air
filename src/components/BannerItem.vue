<template>
  <section class="banner" :style="bannerStyle">
    <div class="container">
      <BreadCrumbsItem />

      <div v-if="bannerImage" class="banner__img">
        <img
          :src="bannerImage"
          :srcset="bannerImageX2 ? `${bannerImageX2} 2x` : ''"
          loading="lazy"
          alt="Plane"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'
import BreadCrumbsItem from './BreadCrumbsItem.vue'

defineProps<{
  bannerImage?: string
  bannerImageX2?: string
  bannerStyle: StyleValue
}>()
</script>

<style scoped lang="scss">
.banner {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;

  @media (max-width: 420px) {
    height: 250px;
  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;

    @media (max-width: 576px) {
      padding-top: 20px;
    }

    @media (max-width: 378px) {
      padding-top: 50px;
    }
  }
}
</style>
