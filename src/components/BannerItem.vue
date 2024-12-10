<template>
  <section
    class="banner"
    :style="{
      backgroundImage: `url(${bannerImage})`,
    }"
  >
    <div class="container">
      <BreadCrumbsItem />

      <div v-if="img" class="banner__img">
        <img :src="img" :srcset="imgX2 ? `${imgX2} 2x` : ''" loading="lazy" alt="Plane" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BreadCrumbsItem from './BreadCrumbsItem.vue'

defineProps<{
  img?: string
  imgX2?: string
  bannerImage?: string
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins';

.banner {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 400px;
  padding-top: 100px;

  @media (max-width: 420px) {
    height: 350px;
  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;

    @media (max-width: 576px) {
      padding-top: 20px;
    }
  }
}
</style>
