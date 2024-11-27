<script setup lang="ts">
defineProps<{
  header: string
}>()
</script>

<template>
  <span class="field-header">{{ header }}</span>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars';

.field-header {
  grid-column: 3 span;
  align-self: center;
  font-weight: 700;
  color: vars.$blue;

  @media (max-width: 670px) {
    grid-column: 12 span;
  }
}
</style>
