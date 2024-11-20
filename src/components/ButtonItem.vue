<script setup lang="ts"></script>

<template>
  <button class="btn btn--fill">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.btn {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-emphasis: center;
  width: 263px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &--fill,
  &--outline {
    transition: all vars.$transition;
  }

  &--fill {
    background-color: vars.$yellow;
    border: 1px solid transparent;

    @include mixins.hover {
      border: 1px solid vars.$yellow;
      background-color: transparent;
    }
  }

  &--outline {
  }
}
</style>
