<template>
  <div class="menu-gamburger" @click="onClick">
    <span class="menu-gamburger__line"></span>
    <span class="menu-gamburger__line"></span>
    <span class="menu-gamburger__line"></span>
    <span class="menu-gamburger__line"></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onClick: () => void
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';

.menu-gamburger {
  cursor: pointer;
  //   background-color: vars.$darkBlue;
  //   width: 100px;
  //   height: 100px;
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
