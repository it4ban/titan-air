<script setup lang="ts">
import LeftAsideItem from './LeftAsideItem.vue'
import ButtonItem from './ButtonItem.vue'
</script>

<template>
  <div class="services">
    <p class="services__header">choose service:</p>

    <div class="services__wrapper">
      <LeftAsideItem />

      <div class="content">
        <h6 class="small-header content__header">O/F & land permits</h6>

        <div class="content__text-wrapper">
          <p class="content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p class="content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p class="content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div class="content__buttons">
          <ButtonItem>REQUEST SERVICES</ButtonItem>
          <ButtonItem>REQUEST A PRICE QUOTE</ButtonItem>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';

.services {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 30px;
    padding-top: 22px;
  }

  &__header {
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    color: vars.$gray;
  }
}

.content {
  grid-column: 8 span;
  display: flex;
  flex-direction: column;
  gap: 19px;

  &__header {
    font-weight: 700;
  }

  &__text {
    line-height: 156%;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 30px;
  }
}
</style>
