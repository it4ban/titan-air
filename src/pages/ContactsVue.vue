<script setup lang="ts">
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'

import OurContacts from '@/components/OurContacts.vue'

const handleMarkerClick = () => {
  alert('click')
}
</script>

<template>
  <main class="contacts">
    <YandexMap
      :settings="{
        location: {
          center: [55.75222, 37.61556],
          zoom: 9,
        },
      }"
      width="100%"
      height="750px"
    >
      <YandexMapDefaultSchemeLayer />
      <YandexMapDefaultFeaturesLayer />

      <YandexMapMarker
        :settings="{
          coordinates: [55.75222, 37.61556],
        }"
      >
        <img
          class="map-marker"
          alt="Map marker"
          src="@/assets/img/map-marker.png"
          @click="handleMarkerClick"
        />
      </YandexMapMarker>
    </YandexMap>

    <OurContacts />
  </main>
</template>

<style scoped lang="scss">
.contacts {
  position: relative;
  width: 100%;
}

.map-marker {
  cursor: pointer;
  max-width: unset;
  width: 60px;
  height: 60px;
}
</style>
