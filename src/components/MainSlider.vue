<template>
  <FullscreenSlider v-if="mainSliderStore.fullscreenEnabled === true" />

  <div class="main-slider">
    <div class="container">
      <TitleMulticolor :title="sliderTitle" :mainColor="'yellow'" :titleColor="'blue'" />
    </div>

    <div class="slider">
      <swiper-container
        ref="swiperContainer"
        :slides-per-view="1.164"
        :initial-slide="mainSliderStore.activeSlide"
        :navigation-next-el="'.slider-bottom__right'"
        :navigation-prev-el="'.slider-bottom__left'"
        @swiperslidechange="getCurrentIndex"
        :breakpoints="{
          620: {
            slidesPerView: 1.164,
          },
          0: {
            slidesPerView: 1,
          },
        }"
      >
        <swiper-slide>
          <div class="slider-item">
            <img
              src="@/assets/img/about-us/our-photos/1.jpg"
              srcset="@/assets/img/about-us/our-photos/1@2x.jpg 2x"
              alt="Img slide"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <img
              src="@/assets/img/about-us/our-photos/1.jpg"
              srcset="@/assets/img/about-us/our-photos/1@2x.jpg 2x"
              alt="Img slide"
            />
          </div>
        </swiper-slide>
      </swiper-container>

      <div class="slider-bottom">
        <div class="slider-bottom__left">
          <button class="navigation-prev">
            <svg
              width="67"
              height="14"
              viewBox="0 0 67 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_182_343)">
                <path
                  d="M0.610358 6.45373L7.28375 0.223657C7.4381 0.0794466 7.64414 0 7.86383 0C8.08353 0 8.28957 0.0794466 8.44392 0.223657L8.93537 0.682353C9.25516 0.981245 9.25516 1.46703 8.93537 1.76547L3.33155 6.99711L8.94158 12.2345C9.09593 12.3788 9.18115 12.571 9.18115 12.776C9.18115 12.9812 9.09593 13.1735 8.94158 13.3178L8.45014 13.7764C8.29567 13.9206 8.08975 14 7.87005 14C7.65036 14 7.44432 13.9206 7.28997 13.7764L0.610358 7.5406C0.455646 7.39593 0.370669 7.20278 0.371157 6.99745C0.370669 6.79132 0.455646 6.59828 0.610358 6.45373Z"
                  fill="white"
                />
                <rect width="65" height="2" rx="1" transform="matrix(-1 0 0 1 67 6)" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_182_343">
                  <rect width="67" height="14" fill="white" transform="matrix(-1 0 0 1 67 0)" />
                </clipPath>
              </defs>
            </svg>

            back
          </button>
          <button class="fullscreen-button" @click="handleToggleFullscreen">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_182_333)">
                <path
                  d="M7.25 27.1875V29H0.90625C0.405717 29 0 28.5943 0 28.0938V21.75H1.8125V25.9097L10.2316 17.4906L11.5094 18.7684L3.09031 27.1875H7.25Z"
                  fill="white"
                />
                <path
                  d="M28.0937 29H21.75V27.1875H25.9097L17.4906 18.7684L18.7684 17.4906L27.1875 25.9097V21.75H29V28.0938C29 28.5943 28.5943 29 28.0937 29Z"
                  fill="white"
                />
                <path
                  d="M27.1875 3.09046L18.7684 11.5095L17.4906 10.2317L25.9097 1.81264H21.75V0.000144958H28.0937C28.5943 0.000144958 29 0.405862 29 0.906395V7.25015H27.1875V3.09046Z"
                  fill="white"
                />
                <path
                  d="M10.2316 11.5186L1.8125 3.09043V7.25012H0V0.906368C0 0.405835 0.405717 0.000118256 0.90625 0.000118256H7.25V1.81262H3.09031L11.5094 10.2317L10.2316 11.5186Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_182_333">
                  <rect width="29" height="29" fill="white" transform="matrix(1 0 0 -1 0 29)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div class="slider-bottom__right">
          <button class="navigation-next">
            next

            <svg
              width="67"
              height="14"
              viewBox="0 0 67 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_182_350)">
                <path
                  d="M66.3896 6.45373L59.7162 0.223657C59.5619 0.0794466 59.3559 0 59.1362 0C58.9165 0 58.7104 0.0794466 58.5561 0.223657L58.0646 0.682353C57.7448 0.981245 57.7448 1.46703 58.0646 1.76547L63.6684 6.99711L58.0584 12.2345C57.9041 12.3788 57.8188 12.571 57.8188 12.776C57.8188 12.9812 57.9041 13.1735 58.0584 13.3178L58.5499 13.7764C58.7043 13.9206 58.9103 14 59.1299 14C59.3496 14 59.5557 13.9206 59.71 13.7764L66.3896 7.5406C66.5444 7.39593 66.6293 7.20278 66.6288 6.99745C66.6293 6.79132 66.5444 6.59828 66.3896 6.45373Z"
                  fill="white"
                />
                <rect y="6" width="65" height="2" rx="1" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_182_350">
                  <rect width="67" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import { register, type SwiperContainer } from 'swiper/element'

import { getSwiperInstance } from '@/utils'
import { useMainSliderStore } from '@/stores/mainSlider'
import TitleMulticolor from './TitleMulticolor.vue'
import FullscreenSlider from './FullscreenSlider.vue'

register()

Swiper.use([Navigation])

defineProps<{
  sliderTitle: string
}>()

const mainSliderStore = useMainSliderStore()

const swiperContainer = ref<SwiperContainer | null>(null)
let mainSliderInstance: Swiper | undefined = undefined

const getCurrentIndex = (e: CustomEvent) => {
  mainSliderStore.changeIndexSlide(e.detail[0].activeIndex)
}
const handleToggleFullscreen = (e: MouseEvent) => {
  e.stopPropagation()
  mainSliderStore.toggleFullscreen(true)
}

const { activeSlide } = storeToRefs(mainSliderStore)
watch(activeSlide, () => {
  mainSliderInstance?.slideTo(activeSlide.value)
})

onMounted(() => {
  mainSliderInstance = getSwiperInstance(swiperContainer.value)
})
onUnmounted(() => {
  mainSliderInstance = undefined
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.main-slider {
  ::v-deep(.title-multicolor) {
    padding-bottom: 31px;
  }
}

.slider {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: fit-content;
}

.slider-item {
  width: 100%;
  max-height: min-content;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}

.slider-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 2;

  @media (max-width: 620px) {
    height: 45px;
  }

  &__left {
    background-color: rgba(29, 45, 66, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 37px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media (max-width: 460px) {
      gap: 20px;
    }

    @media (max-width: 398px) {
      gap: 10px;
    }

    @include mixins.hover {
      svg {
        opacity: 0.9;
      }

      opacity: 0.9;
    }
  }

  &__right {
    width: 315px;
    height: 100%;
    background: vars.$blue;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media (max-width: 460px) {
      width: 220px;
    }

    svg {
      transition: all 0.3s ease-in-out;
    }

    @include mixins.hover {
      svg {
        opacity: 0.9;
      }

      opacity: 0.9;
    }
  }
}

.navigation-prev,
.navigation-next {
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  color: vars.$light;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 460px) {
    gap: 15px;

    svg {
      width: 50px;
    }
  }

  @media (max-width: 398px) {
    font-size: 12px;
  }
}

.navigation-next {
  padding-left: 28px;

  @media (max-width: 460px) {
    padding-left: 15px;
    padding-right: 10px;
  }
}

.fullscreen-button {
  width: 60px;
  height: 100%;
  background-color: rgba(29, 45, 66, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  @media (max-width: 398px) {
    width: 40px;
  }

  svg {
    transition: all 0.4s ease;
  }

  @include mixins.hover {
    svg {
      opacity: 0.7;
    }
  }
}
</style>
