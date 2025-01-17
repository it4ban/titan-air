<script setup lang="ts">
import MobileMenu from './MobileMenu.vue'
import LogoItem from './LogoItem.vue'
import SearchFormItem from './SearchFormItem.vue'
import LangSwitcherItem from './LangSwitcherItem.vue'

import { ref } from 'vue'

const isOpened = ref(false)

function toggleMenu() {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <MobileMenu v-model:isOpened="isOpened" />

  <div class="header">
    <div class="header__wrapper">
      <div class="menu-gamburger" @click="toggleMenu">
        <span class="menu-gamburger__line"></span>
        <span class="menu-gamburger__line"></span>
        <span class="menu-gamburger__line"></span>
        <span class="menu-gamburger__line"></span>
      </div>

      <LogoItem />

      <div class="header__right">
        <SearchFormItem />

        <a href="#" class="icon contacts-link">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53568 4.58934C1.73808 4.73216 2.34818 5.15635 3.36602 5.86168C4.38389 6.567 5.16365 7.11009 5.70532 7.49096C5.76484 7.53271 5.89127 7.62346 6.08469 7.76335C6.27815 7.90332 6.43889 8.01644 6.5668 8.10272C6.6948 8.18897 6.84953 8.28573 7.03117 8.39284C7.21274 8.49985 7.38389 8.58035 7.5446 8.63364C7.70535 8.68737 7.85414 8.71398 7.99102 8.71398H8H8.00901C8.14589 8.71398 8.29475 8.68733 8.45549 8.63364C8.61614 8.58035 8.78745 8.49976 8.96886 8.39284C9.15037 8.2856 9.30511 8.18894 9.43311 8.10272C9.56111 8.01644 9.72173 7.90332 9.91524 7.76335C10.1086 7.62334 10.2352 7.53271 10.2947 7.49096C10.8423 7.11009 12.2352 6.14279 14.4733 4.58915C14.9078 4.28571 15.2708 3.91957 15.5624 3.49098C15.8542 3.06257 16 2.61315 16 2.14296C16 1.75005 15.8586 1.41371 15.5758 1.13397C15.293 0.854176 14.9582 0.714355 14.5714 0.714355H1.42851C0.970209 0.714355 0.617514 0.869094 0.370489 1.17857C0.123496 1.48811 0 1.87502 0 2.33926C0 2.71425 0.163745 3.12061 0.491077 3.55809C0.818379 3.9956 1.1667 4.33938 1.53568 4.58934Z"
              fill="white"
            />
            <path
              d="M15.107 5.54458C13.1549 6.86589 11.6725 7.89276 10.6608 8.62498C10.3215 8.87489 10.0462 9.06997 9.83487 9.20976C9.6235 9.34964 9.34239 9.49249 8.99113 9.63826C8.64 9.78424 8.31276 9.85701 8.00913 9.85701H8.00003H7.99105C7.68749 9.85701 7.36006 9.78424 7.00893 9.63826C6.6578 9.49249 6.3765 9.34964 6.16519 9.20976C5.95394 9.06997 5.67862 8.87489 5.33937 8.62498C4.53575 8.03574 3.05661 7.0088 0.901877 5.54458C0.562505 5.31854 0.26191 5.05944 0 4.76782V11.8569C0 12.25 0.139821 12.5862 0.419619 12.8659C0.699355 13.1458 1.03573 13.2857 1.42861 13.2857H14.5715C14.9643 13.2857 15.3006 13.1458 15.5804 12.8659C15.8603 12.5861 16 12.25 16 11.8569V4.76782C15.744 5.05341 15.4465 5.3125 15.107 5.54458Z"
              fill="white"
            />
          </svg>
        </a>

        <LangSwitcherItem />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: vars.$blue;
  width: 100%;
  z-index: 3;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 38px;

    @media (max-width: 648px) {
      padding-right: 15px;
      gap: 15px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 26px;

    @media (max-width: 648px) {
      display: none;
    }
  }
}

.menu-gamburger {
  cursor: pointer;
  background-color: vars.$darkBlue;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    .menu-gamburger__line {
      &:nth-child(odd) {
        &::after {
          width: 28px;
        }
      }

      &:nth-child(even) {
        &::after {
          width: 23px;
        }
      }
    }
  }

  &__line {
    position: relative;
    display: block;
    width: 40px;
    height: 4px;
    background-color: #455c7d;

    &::after {
      content: '';
      transition: all 0.3s ease;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      height: 4px;
      background-color: vars.$light;
    }

    &:nth-child(odd) {
      &::after {
        width: 23px;
      }
    }

    &:nth-child(even) {
      &::after {
        width: 28px;
      }
    }
  }
}
</style>
