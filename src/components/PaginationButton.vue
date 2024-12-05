<template>
  <button class="pagination-button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.pagination-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(29, 45, 66, 0.3);
  border-radius: 50%;
  transition: all vars.$transition;

  ::v-deep(svg path) {
    transition: all 0.3s ease-in-out;
  }

  @include mixins.hover {
    border-color: transparent;
    background-color: vars.$blue;
    color: vars.$light;

    ::v-deep(svg path) {
      fill: vars.$light;
    }
  }
}
</style>
