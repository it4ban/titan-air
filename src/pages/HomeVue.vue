<template>
  <main class="home">
    <section class="one-screen">
      <div class="one-screen__figure-1"></div>
      <div class="one-screen__figure-2"></div>
      <div class="container">
        <div class="one-screen__wrapper">
          <div class="one-screen__block">
            <div class="screen-title">
              <span class="screen-title__header"><span>best</span> partner for you </span>
              <div class="screen-title__underline"></div>
            </div>

            <div class="one-screen__bottom">
              <p class="screen-text one-screen__text">
                Titan AirService specializes in aviation and marine support services for executive,
                government and commercial companys.
              </p>

              <ButtonItem :variant="'outline-yellow'"> Show more </ButtonItem>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ul>
      <li>
        <RouterLink :to="`/`">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="`/service`">Services</RouterLink>
      </li>
      <li>
        <RouterLink :to="`/contacts`">Contacts</RouterLink>
      </li>
      <li>
        <RouterLink :to="`/about_us`">About US</RouterLink>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ButtonItem from '@/components/ButtonItem.vue'
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.home {
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-self: center;
    gap: 20px;
  }
}

.one-screen {
  background-image: url('@/assets/img/home/main-bg-1.jpg');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  position: relative;

  @include mixins.retina-bg {
    background-image: url('@/assets/img/home/main-bg-1@2x.jpg');
  }

  &::before {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(38, 53, 75, 0.8);

    @media (max-width: 590px) {
      display: block;
    }
  }

  &__figure-1 {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('@/assets/img/home/figure-1.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100% 105%;
    width: 70%;
    height: 100%;
    z-index: 2;

    @include mixins.retina-bg {
      background-image: url('@/assets/img/home/figure-1@2x.png');
    }

    @media (max-width: 590px) {
      display: none;
    }
  }

  &__figure-2 {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('@/assets/img/home/substract.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100% 105%;
    width: 80%;
    height: 100%;
    z-index: 1;

    @include mixins.retina-bg {
      background-image: url('@/assets/img/home/substract@2x.png');
    }

    @media (max-width: 590px) {
      display: none;
    }
  }

  &__wrapper {
    position: relative;
    z-index: 3;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }

  &__block {
    grid-column: 2 / 6;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    min-height: 600px;

    @media (max-width: 1120px) {
      padding: 0 20px;
      grid-column: 2 / 8;
    }

    @media (max-width: 590px) {
      grid-column: 1 / 12;
    }
  }

  &__text {
    font-size: 18px;
    line-height: 139%;
    padding: 22px 0 57px;

    @media (max-width: 590px) {
      font-size: 16px;
      padding: 20px 0 24px;
    }

    @media (max-width: 380px) {
      font-size: 14px;
    }
  }
}

.screen-title {
  &__header {
    @media (max-width: 1120px) {
      font-size: 22px;
    }
  }
}
</style>
