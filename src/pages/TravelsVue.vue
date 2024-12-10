<script setup lang="ts">
import '@/assets/scss/service.scss'

import { travelData } from '@/data'

import ServiceFilterItem from '@/components/ServiceFilterItem.vue'
import BannerItem from '@/components/BannerItem.vue'
import TitleMulticolor from '@/components/TitleMulticolor.vue'
</script>

<template>
  <main class="all">
    <div class="all__wrapper">
      <BannerItem :bannerImage="travelData.bannerImg" />

      <section class="page">
        <div class="container">
          <div class="page-description">
            <TitleMulticolor
              :title="travelData.pageTitle"
              :mainColor="'blue'"
              :titleColor="'yellow'"
            />

            <p class="page-description__text">
              {{ travelData.pageDescription }}
            </p>

            <div class="underline"></div>
          </div>

          <div class="page-content">
            <ServiceFilterItem
              :items="travelData.servicesItems"
              :activeItemIndex="travelData.serviceActiveIndex"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
