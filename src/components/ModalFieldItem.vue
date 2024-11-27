<script setup lang="ts">
import FieldHeaderItem from './FieldHeaderItem.vue'

defineProps<{
  header: string
}>()
</script>

<template>
  <div class="modal-field">
    <div class="modal-field__wrapper">
      <FieldHeaderItem :header="header" />
      <input type="text" class="modal-field__input" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-field {
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
