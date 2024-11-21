<script setup lang="ts">
defineProps<{
  variant?: 'fill' | 'outline'
}>()
</script>

<template>
  <button :class="['btn', `btn--${variant}`]">
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
  padding: 0 2px;

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
    border: 1px solid vars.$yellow;
    background-color: transparent;

    @include mixins.hover {
      border-color: transparent;
      background-color: vars.$yellow;
    }
  }
}
</style>
