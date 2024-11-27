<script setup lang="ts">
import type { StyleValue } from 'vue'
import FieldHeaderItem from './FieldHeaderItem.vue'

defineProps<{
  header: string
  inputStyle?: StyleValue
}>()
</script>

<template>
  <div class="modal-area">
    <div class="modal-area__wrapper">
      <FieldHeaderItem :header="header" />
      <textarea class="modal-area__input" :style="inputStyle"></textarea>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-area {
  &__wrapper {
    @media (max-width: 520px) {
      padding: 0 20px;
    }
  }

  &__input {
    @media (max-width: 670px) {
      grid-column: 12 span;
    }
  }
}
</style>
