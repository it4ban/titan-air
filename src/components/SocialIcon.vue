<template>
  <a
    :href="href"
    :class="['social-icon', variant === 'yellow' ? 'social-icon--yellow' : 'social-icon--blue']"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  variant: 'yellow' | 'blue'
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid transparent;

  &--yellow,
  &--blue {
    transition: all vars.$transition;

    ::v-deep(svg path) {
      transition: all 0.3s ease-in-out;
    }
  }

  &--yellow {
    border: 1px solid vars.$yellow;

    @include mixins.hover {
      background-color: vars.$yellow;

      svg path {
        fill: vars.$blue;
      }
    }
  }

  &--blue {
    border: 1px solid vars.$blue;
    ::v-deep(svg path) {
      fill: vars.$blue;
    }

    @include mixins.hover {
      border-color: transparent;
      background-color: vars.$yellow;

      ::v-deep(svg path) {
        fill: vars.$light;
      }
    }
  }
}
</style>
