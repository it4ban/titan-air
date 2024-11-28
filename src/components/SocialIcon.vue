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

    svg path {
      transition: all vars.$transition;
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
  }
}
</style>
