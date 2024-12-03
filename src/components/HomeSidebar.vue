<template>
  <MobileMenu v-model:isOpened="isOpened" :centeredCloseIcon="true" />

  <aside class="sidebar-menu">
    <div class="sidebar-menu__wrapper">
      <div class="sidebar-menu__nav">
        <MenuGamburger
          :onClick="
            () => {
              handleMenuOpened()
            }
          "
        />

        <span class="sidebar-title sidebar-menu__title">Menu</span>
      </div>

      <div class="sidebar-prompt">
        <div class="sidebar-prompt__line"></div>
        <span class="sidebar-title sidebar-prompt__message">SCROLL DOWN</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import MenuGamburger from './MenuGamburger.vue'
import MobileMenu from './MobileMenu.vue'

const isOpened = ref(false)

const handleMenuOpened = () => {
  isOpened.value = !isOpened.value
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';

.sidebar-menu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 88px;
  z-index: 3;

  @media (max-width: 970px) {
    display: none;
  }

  &__wrapper {
    display: flex;

    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__nav {
    position: relative;
    top: 15px;
  }

  &__title {
    position: absolute;
    top: 10px;
    right: -26px;
  }
}

.sidebar-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: vars.$light;
  transform: rotate(-90deg);
}

.sidebar-prompt {
  position: relative;
  margin-top: auto;

  &__line {
    height: 158px;
    width: 2px;
    background-color: #455c7d;
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      left: 0;
      height: 101px;
      background-color: vars.$light;
      animation: scroll 1s infinite linear;
    }
  }

  &__message {
    position: absolute;
    text-wrap: nowrap;
    top: 32px;
    right: -48px;
  }
}

@keyframes scroll {
  0% {
    top: 0;
  }
  50% {
    top: 28px;
  }
  100% {
    top: 57px;
  }
}
</style>
