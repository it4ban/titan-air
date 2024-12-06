<script setup lang="ts">
import MobileMenu from './MobileMenu.vue'
import LogoItem from './LogoItem.vue'
import SearchIcon from './SearchIcon.vue'
import LangSwitcherItem from './LangSwitcherItem.vue'

import { ref } from 'vue'
import ContactsLinkIcon from './ContactsLinkIcon.vue'

const isOpened = ref(false)
const isOpenHeader = ref(false)

defineProps<{
  headerToggled?: boolean
}>()

const toggleMenu = () => {
  isOpened.value = !isOpened.value
}

const toggleHeader = () => {
  isOpenHeader.value = !isOpenHeader.value
}
</script>

<template>
  <MobileMenu v-model:isOpened="isOpened" />

  <div :class="['header', { 'header--hidden': isOpenHeader }]">
    <button v-if="headerToggled" class="header-toggle" @click="toggleHeader">
      <div class="header-toggle__wrapper">
        <svg
          width="12"
          height="14"
          viewBox="0 0 20 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.84313 14.2904L15.6729 0.49524C16.0159 0.175917 16.4738 0 16.962 0C17.4502 0 17.908 0.175917 18.251 0.49524L19.3432 1.51092C20.0538 2.17276 20.0538 3.24842 19.3432 3.90925L6.89023 15.4936L19.357 27.0908C19.7 27.4101 19.8893 27.8358 19.8893 28.2897C19.8893 28.7441 19.7 29.1698 19.357 29.4894L18.2649 30.5048C17.9216 30.8241 17.464 31 16.9758 31C16.4876 31 16.0297 30.8241 15.6867 30.5048L0.84313 16.697C0.499323 16.3767 0.310486 15.949 0.311569 15.4943C0.310486 15.0379 0.499323 14.6105 0.84313 14.2904Z"
            fill="white"
          />
        </svg>
      </div>
    </button>

    <div class="header__wrapper">
      <div class="menu-gamburger" @click="toggleMenu">
        <span class="menu-gamburger__line"></span>
        <span class="menu-gamburger__line"></span>
        <span class="menu-gamburger__line"></span>
        <span class="menu-gamburger__line"></span>
      </div>

      <LogoItem />

      <div class="header__right">
        <SearchIcon />

        <ContactsLinkIcon iconVariant="light" />

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
  height: 100px;
  transition: all vars.$transition;
  z-index: 3;

  &--hidden {
    height: 0;

    .header__wrapper {
      opacity: 0;
      height: 0;
    }

    .menu-gamburger {
      height: 0;
      overflow: hidden;
    }

    .header-toggle {
      &__wrapper {
        transform: rotate(-270deg);
      }

      svg {
        animation: trembling-up 0.5s alternate infinite;
      }
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 38px;
    opacity: 1;
    height: 100px;
    transition: all vars.$transition;

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
      ::v-deep(.search-form) {
        display: none;
      }

      ::v-deep(.contacts-link) {
        display: none;
      }
    }
  }
}

.header-toggle {
  position: absolute;
  bottom: -29px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: vars.$darkBlue;
  border-end-start-radius: 20%;
  border-end-end-radius: 20%;
  z-index: 3;

  &__wrapper {
    transform: rotate(-90deg);
    transition: all vars.$transition;
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
    animation: trembling-down 0.5s alternate infinite;
  }
}

@keyframes trembling-down {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(1px);
    opacity: 0.8;
  }
}

@keyframes trembling-up {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-1px);
    opacity: 0.8;
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
  transition: all 0.3s ease-in-out;

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
