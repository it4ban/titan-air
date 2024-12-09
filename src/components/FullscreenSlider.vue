<template>
  <div
    :class="[
      'fullscreen-slider',
      { 'fullscreen-slider--active': mainSliderStore.fullscreenEnabled },
    ]"
  >
    <button class="close-fullscreen" @click="mainSliderStore.toggleFullscreen(false)">
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.24265 1.41422C3.4616 0.633168 2.19527 0.633168 1.41422 1.41422C0.633171 2.19527 0.633171 3.4616 1.41422 4.24264L12.7279 15.5564L1.41422 26.8701C0.633168 27.6511 0.633168 28.9174 1.41422 29.6985C2.19527 30.4795 3.4616 30.4795 4.24264 29.6985L15.5564 18.3848L26.8701 29.6985C27.6511 30.4795 28.9174 30.4795 29.6985 29.6985C30.4795 28.9174 30.4795 27.6511 29.6985 26.8701L18.3848 15.5564L29.6985 4.24265C30.4795 3.4616 30.4795 2.19527 29.6985 1.41422C28.9174 0.633169 27.6511 0.63317 26.8701 1.41422L15.5564 12.7279L4.24265 1.41422Z"
          fill="white"
        />
      </svg>
    </button>
    <div class="container">
      <div class="fullscreen-slider__wrapper">
        <swiper-container
          ref="swiperContainer"
          :slides-per-view="1"
          :space-between="0"
          :navigation-next-el="'.navigation-next'"
          :navigation-prev-el="'.navigation-prev'"
          @swiperslidechange="
            (e: CustomEvent) => {
              mainSliderStore.changeIndexSlide(e.detail[0].activeIndex)
            }
          "
        >
          <swiper-slide>
            <img
              src="@/assets/img/about-us/our-photos/1.jpg"
              srcset="@/assets/img/about-us/our-photos/1@2x.jpg 2x"
              alt="Fullscreen img"
            />
            <span>0</span>
          </swiper-slide>
          <swiper-slide>
            <img
              src="@/assets/img/about-us/our-photos/1.jpg"
              srcset="@/assets/img/about-us/our-photos/1@2x.jpg 2x"
              alt="Fullscreen img"
            />
            <span>1</span>
          </swiper-slide>
        </swiper-container>

        <div class="fullscreen-slider__navigation">
          <button class="navigation-prev">
            <svg
              width="20"
              height="31"
              viewBox="0 0 20 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_176_68)">
                <path
                  d="M0.843191 14.2904L15.673 0.49524C16.016 0.175917 16.4738 0 16.962 0C17.4502 0 17.9081 0.175917 18.2511 0.49524L19.3432 1.51092C20.0539 2.17276 20.0539 3.24842 19.3432 3.90925L6.8903 15.4936L19.357 27.0908C19.7 27.4101 19.8894 27.8358 19.8894 28.2897C19.8894 28.7441 19.7 29.1698 19.357 29.4894L18.2649 30.5048C17.9217 30.8241 17.4641 31 16.9758 31C16.4876 31 16.0298 30.8241 15.6868 30.5048L0.843191 16.697C0.499384 16.3767 0.310547 15.949 0.31163 15.4943C0.310547 15.0379 0.499384 14.6105 0.843191 14.2904Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_176_68">
                  <rect width="20" height="31" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button class="navigation-next">
            <svg
              width="20"
              height="31"
              viewBox="0 0 20 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_176_23)">
                <path
                  d="M19.1568 14.2904L4.32704 0.49524C3.98405 0.175917 3.52618 0 3.03797 0C2.54976 0 2.09189 0.175917 1.7489 0.49524L0.656786 1.51092C-0.0538571 2.17276 -0.0538571 3.24842 0.656786 3.90925L13.1097 15.4936L0.642969 27.0908C0.299974 27.4101 0.110596 27.8358 0.110596 28.2897C0.110596 28.7441 0.299974 29.1698 0.642969 29.4894L1.73508 30.5048C2.07834 30.8241 2.53594 31 3.02415 31C3.51236 31 3.97023 30.8241 4.31323 30.5048L19.1568 16.697C19.5006 16.3767 19.6895 15.949 19.6884 15.4943C19.6895 15.0379 19.5006 14.6105 19.1568 14.2904Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_176_23">
                  <rect width="20" height="31" fill="white" transform="matrix(-1 0 0 1 20 0)" />
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useMainSliderStore } from '@/stores/mainSlider'
import type { SwiperContainer } from 'swiper/element'
import Swiper from 'swiper'
import { getSwiperInstance } from '@/utils'

const mainSliderStore = useMainSliderStore()

const swiperContainer = ref<SwiperContainer | null>(null)
let swiperInstance: Swiper | undefined = undefined

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && mainSliderStore.fullscreenEnabled) {
    mainSliderStore.toggleFullscreen(false)
  }
}

onMounted(() => {
  swiperInstance = getSwiperInstance(swiperContainer.value)
  swiperInstance?.slideTo(mainSliderStore.activeSlide)
  window.addEventListener('keydown', handleKeyDown)
})
onUnmounted(() => {
  swiperInstance = undefined
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.container {
  width: 100%;
}

.fullscreen-slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: end;
  max-width: 100%;
  overflow: hidden;

  &--active {
    z-index: 5;
    opacity: 1;
  }

  &__wrapper {
    width: 100%;
    position: relative;
    height: max-content;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: start;
  }

  &__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    padding-top: 20px;
  }
}

.close-fullscreen {
  margin: 40px;
  border: 2px solid vars.$light;
  padding: 10px;
  background-color: #ec3a3a;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    margin: 20px;
  }

  @media (max-width: 620px) {
    width: 45px;
    height: 45px;
  }

  @include mixins.hover {
    opacity: 0.7;
  }
}

.navigation-next,
.navigation-prev {
  transition: all 0.3s ease-in-out;
}

.navigation-prev {
  left: -40px;

  @include mixins.hover {
    transform: translateX(-5px);
    opacity: 0.7;
  }
}

.navigation-next {
  right: -20px;

  @include mixins.hover {
    transform: translateX(5px);
    opacity: 0.7;
  }
}
</style>
