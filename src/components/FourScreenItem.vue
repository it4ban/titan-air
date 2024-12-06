<template>
  <section class="four-screen">
    <div class="xs-container">
      <div class="four-screen__wrapper">
        <div
          :class="[
            'four-screen__top',
            { 'animate__animated animate__bounceIn': activeSection === 3 },
          ]"
        >
          <div class="four-screen__top-wrapper">
            <div class="screen-title">
              <span class="screen-title__header"><span>Charter</span> flights</span>
              <div class="screen-title__underline"></div>
            </div>

            <ButtonItem :variant="'outline-yellow'"> Show more </ButtonItem>
          </div>
        </div>

        <p
          :class="[
            'screen-text four-screen__text',
            { 'animate__animated animate__flipInX': activeSection === 3 },
          ]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div class="four-screen__bottom">
          <div class="four-screen__bottom-wrapper">
            <CategoryBlock>
              <template v-slot:number>1</template>
              <template v-slot:header><span>Search</span> For a Flight </template>
              <template v-slot:description>
                Start your search below or call our team at
                <a href="tel:+109999999999">+10 (999) 999-9999</a>
              </template>
            </CategoryBlock>
            <CategoryBlock>
              <template v-slot:number>2</template>
              <template v-slot:header><span>Compare</span> Your Prices </template>
              <template v-slot:description
                >See instant prices from 7,000+ accredited aircraft worldwide</template
              >
            </CategoryBlock>
          </div>
          <div class="four-screen__bottom-wrapper">
            <CategoryBlock>
              <template v-slot:number>3</template>
              <template v-slot:header><span>Tailor</span> Your Quotes </template>
              <template v-slot:description
                >We'll confirm availability and final price for your preferred option</template
              >
            </CategoryBlock>
            <CategoryBlock>
              <template v-slot:number>4</template>
              <template v-slot:header><span>Book</span> Your Flight </template>
              <template v-slot:description
                >Book online or with our 24/7 team of aviation experts</template
              >
            </CategoryBlock>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScreenScroll } from '@/hooks'
import ButtonItem from './ButtonItem.vue'
import CategoryBlock from './CategoryBlock.vue'

const { activeSection } = useScreenScroll()
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.four-screen {
  background-image: url('@/assets/img/home/main-bg-4.jpg');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  position: relative;

  @include mixins.retina-bg {
    background-image: url('@/assets/img/home/main-bg-4@2x.jpg');
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    column-gap: 30px;

    @media (max-width: 848px) {
      padding: 20px 20px;
    }
  }

  &__top-wrapper {
    display: flex;
    justify-content: space-between;

    @media (max-width: 540px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__text {
    padding: 28px 0 45px;

    @media (max-width: 598px) {
      padding: 20px 0;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  &__bottom-wrapper {
    display: flex;
    align-items: center;
    gap: 28px;

    @media (max-width: 820px) {
      flex-direction: column;
    }
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
      width: 51%;
    }
  }
}
</style>
