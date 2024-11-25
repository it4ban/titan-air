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
