<script setup lang="ts">
import { ErrorMessage } from 'vee-validate'
import FieldHeaderItem from './FieldHeaderItem.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="modal-checks">
    <FieldHeaderItem :header="title" />

    <div class="modal-checks__wrapper">
      <div class="check-boxes">
        <ul class="check-list">
          <slot name="list-left"></slot>
        </ul>

        <ul class="check-list">
          <slot name="list-right"></slot>
        </ul>

        <ErrorMessage name="checkboxes" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-checks {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding: 34px 50px;

  @media (max-width: 670px) {
    row-gap: 20px;
  }

  @media (max-width: 520px) {
    padding: 25px 20px;
  }

  &__wrapper {
    grid-column: 7 span;

    @media (max-width: 670px) {
      gap: 15px;
      grid-column: 12 span;
    }
  }
}

.check-boxes {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 263px));
  gap: 30px;
}

.check-list {
  grid-column: 1 span;
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media (max-width: 578px) {
    grid-column: 2 span;
  }
}
</style>
