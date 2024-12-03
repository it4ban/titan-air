<template>
  <section class="three-screen">
    <div class="container">
      <div class="three-screen__wrapper">
        <div class="three-screen__block-left">
          <div class="screen-title">
            <span class="screen-title__header"><span>Travel</span> agency</span>
            <div class="screen-title__underline"></div>
          </div>

          <p class="screen-text three-screen__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <ButtonItem :variant="'outline-yellow'"> Show more </ButtonItem>
        </div>

        <div class="img-scene">
          <div class="img-scene__image">
            <img
              src="@/assets/img/home/earth.png"
              srcset="@/assets/img/home/earth@2x.png 2x"
              loading="lazy"
              alt="Earth"
            />
          </div>
          <div class="img-scene__big-circle"></div>
          <div class="img-scene__small-circle"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonItem from './ButtonItem.vue'
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.three-screen {
  background-image: url('@/assets/img/home/main-bg-3.jpg');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  position: relative;

  @include mixins.retina-bg {
    background-image: url('@/assets/img/home/main-bg-3@2x.jpg');
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
    min-height: 600px;
    height: 100vh;

    @media (max-width: 920px) {
      padding: 120px 0;
    }

    @media (max-width: 398px) {
      gap: 0;
    }
  }

  &__block-left {
    grid-column: 2 / 6;
    min-width: 390px;
    align-self: center;

    @media (max-width: 1200px) {
      min-width: auto;
    }

    @media (max-width: 1119px) {
      grid-column: 6 span;
    }

    @media (max-width: 920px) {
      grid-column: 12 span;
    }
  }

  &__text {
    line-height: 25px;
  }
}

.screen-title {
  &__header {
    @media (max-width: 498px) {
      font-size: 24px;
    }
  }

  &__underline {
    &::before {
      width: 48%;
    }
  }
}

.screen-text {
  padding: 28px 0 49px;

  @media (max-width: 620px) {
    padding: 20px 0;
  }
}

.img-scene {
  grid-column: 7 / 12;
  align-self: center;

  @media (max-width: 1119px) {
    grid-column: 6 span;
  }

  @media (max-width: 920px) {
    grid-column: 12 span;
    justify-self: end;
    max-width: 320px;
    position: relative;
    bottom: 20px;
  }

  @media (max-width: 576px) {
    display: none;
  }

  &__big-circle {
    left: 60%;
    bottom: 30%;

    @media (max-width: 1120px) {
      left: 50%;
    }

    @media (max-width: 920px) {
      max-width: 220px;
      max-height: 220px;
      bottom: 40%;
    }
  }

  &__small-circle {
    left: 60%;
    bottom: 35%;

    @media (max-width: 1120px) {
      left: 50%;
    }
  }
}
</style>
