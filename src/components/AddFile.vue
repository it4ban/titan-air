<script setup lang="ts">
import { ref } from 'vue'

import ButtonItem from './ButtonItem.vue'

const fileInput = ref<HTMLInputElement | null>(null)
const fileNameValue = ref<string>('You file.pdf')

const openFileInput = (e: Event) => {
  e.preventDefault()

  fileInput.value?.click()
}

const hadleInputChange = (e: Event) => {
  const fileInput = e?.target as HTMLInputElement

  const file = fileInput.files ? fileInput.files[0] : null

  if (file) {
    fileNameValue.value = file.name
  }
}
</script>

<template>
  <div class="add-file">
    <div class="add-file__wrapper">
      <ButtonItem variant="fill-dark" :onClick="openFileInput"> Add file </ButtonItem>

      <input ref="fileInput" class="add-file__input" type="file" @change="hadleInputChange" />

      <p ref="fileNameField" class="file-name">
        {{ fileNameValue }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-file {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 31px;
  }

  &__input {
    display: none;
  }
}

.file-name {
  font-weight: 400px;
}
</style>
