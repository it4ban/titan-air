<template>
  <section class="five-screen">
    <div class="xs-container">
      <div class="five-screen__wrapper">
        <div
          :class="['screen-title', { 'animate__animated animate__flipInY': activeSection === 4 }]"
        >
          <span class="screen-title__header"><span>Our </span>Partners</span>
        </div>

        <p
          :class="[
            'screen-text five-screen__text',
            { 'animate__animated animate__bounceIn': activeSection === 4 },
          ]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div class="partners">
          <div
            :class="[
              'partners__wrapper',
              { 'animate__animated animate__fadeInBottomRight': activeSection === 4 },
            ]"
          >
            <div class="partners__block">
              <img
                src="@/assets/img/home/partners/delta.png"
                srcset="@/assets/img/home/partners/delta@2x.png 2x"
                loading="lazy"
                alt="Delta"
              />
              <img
                src="@/assets/img/home/partners/swiss.png"
                srcset="@/assets/img/home/partners/swiss@2x.png 2x"
                loading="lazy"
                alt="Swiss"
              />
            </div>

            <div class="partners__block">
              <img
                src="@/assets/img/home/partners/qatar.png"
                srcset="@/assets/img/home/partners/qatar@2x.png 2x"
                loading="lazy"
                alt="Qatar"
              />
              <img
                src="@/assets/img/home/partners/japan-airlines.png"
                srcset="@/assets/img/home/partners/japan-airlines@2x.png 2x"
                loading="lazy"
                alt="Japan Airlines"
              />
            </div>
          </div>

          <div
            :class="[
              'partners__wrapper',
              { 'animate__animated animate__fadeInBottomLeft': activeSection === 4 },
            ]"
          >
            <div class="partners__block">
              <img
                src="@/assets/img/home/partners/british-airways.png"
                srcset="@/assets/img/home/partners/british-airways@2x.png 2x"
                loading="lazy"
                alt="British Airways"
              />
              <img
                src="@/assets/img/home/partners/aero-mexico.png"
                srcset="@/assets/img/home/partners/aero-mexico@2x.png 2x"
                loading="lazy"
                alt="Aero Mexico"
              />
            </div>

            <div class="partners__block">
              <img
                src="@/assets/img/home/partners/southwest.png"
                srcset="@/assets/img/home/partners/southwest@2x.png 2x"
                loading="lazy"
                alt="Southwest"
              />
              <img
                src="@/assets/img/home/partners/jet-airways.png"
                srcset="@/assets/img/home/partners/jet-airways@2x.png 2x"
                loading="lazy"
                alt="Jet Airways"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScreenScroll } from '@/hooks'

const { activeSection } = useScreenScroll()
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.five-screen {
  background-image: url('@/assets/img/home/main-bg-5.jpg');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  position: relative;

  @include mixins.retina-bg {
    background-image: url('@/assets/img/home/main-bg-5@2x.jpg');
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    column-gap: 30px;

    @media (max-width: 780px) {
      padding: 20px 0;
    }
  }

  &__text {
    padding: 85px 0 74px;
    line-height: 156%;
    font-weight: 400;

    @media (max-width: 780px) {
      padding: 25px 0;
    }
  }
}

.screen-title {
  &__header {
    @media (max-width: 498px) {
      font-size: 24px;
    }
  }
}

.partners {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: center;

    @media (max-width: 780px) {
      row-gap: 20px;
    }
  }

  &__block {
    grid-column: 2 span;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 780px) {
      grid-column: 4 span;
    }

    @media (max-width: 398px) {
      img {
        max-width: 120px;
      }
    }
  }
}
</style>
