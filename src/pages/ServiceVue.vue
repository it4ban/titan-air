<script setup lang="ts">
import ServiceFilterItem from '@/components/ServiceFilterItem.vue'
import BannerItem from '@/components/BannerItem.vue'
import TitleMulticolor from '@/components/TitleMulticolor.vue'

import serviceBg from '@/assets/img/support/top-bg.jpg'
import planeImg from '@/assets/img/support/plane.png'
import planeImgX2 from '@/assets/img/support/plane@2x.png'
</script>

<template>
  <main class="all">
    <div class="all__wrapper">
      <BannerItem
        :bannerImage="planeImg"
        :bannerImageX2="planeImgX2"
        :bannerStyle="{ backgroundImage: `url(${serviceBg})` }"
      />

      <section class="page">
        <div class="container">
          <div class="page-description">
            <TitleMulticolor
              title="Flight support service"
              :mainColor="'blue'"
              :titleColor="'yellow'"
            />

            <p class="page-description__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <div class="underline"></div>
          </div>

          <div class="page-content">
            <ServiceFilterItem />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
.all {
  width: 100%;

  &__wrapper {
    padding: 0 0 57px;

    @media (max-width: 420px) {
      padding-bottom: 35px;
    }
  }
}

.page-description {
  padding: 36px 0 24px;

  @media (max-width: 520px) {
    padding: 20px 0;
  }

  &__text {
    padding: 26px 0 31px;
    line-height: 25px;

    @media (max-width: 520px) {
      font-size: 14px;
      padding: 20px 0;
    }

    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
}
</style>
