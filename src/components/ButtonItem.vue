<script setup lang="ts">
defineProps<{
  variant?: 'fill-contrast' | 'fill-dark' | 'outline'
  onClick?: (e: Event) => void
}>()
</script>

<template>
  <button :class="['btn', `btn--${variant}`]" @click="onClick">
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

  &--fill-contrast,
  &--fill-dark,
  &--outline {
    transition: all vars.$transition;
  }

  &--fill-contrast {
    background-color: vars.$yellow;
    border: 1px solid transparent;

    @include mixins.hover {
      border: 1px solid vars.$yellow;
      background-color: transparent;
    }
  }

  &--fill-dark {
    background-color: vars.$blue;
    color: vars.$light;

    @include mixins.hover {
      background-color: transparent;
      border: 1px solid vars.$blue;
      color: vars.$blue;
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
