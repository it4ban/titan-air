<script setup lang="ts">
import { computed } from 'vue'

import ModalForm from './ModalForm.vue'
import ModalFieldItem from './ModalFieldItem.vue'
import ModalAreaItem from './ModalAreaItem.vue'
import CheckItem from './CheckItem.vue'
import FieldHeaderItem from './FieldHeaderItem.vue'

const props = defineProps<{
  id: string
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'update-state', isOpen: boolean): void
}>()

const newOpenedState = computed({
  get: () => props.isOpen,
  set: (newValue: boolean) => {
    emit('update-state', newValue)
  },
})
</script>

<template>
  <ModalForm v-model="newOpenedState" title="Ground handling request form">
    <template v-slot:top-content>
      <ModalFieldItem :header="'Company name:'" />
      <ModalFieldItem :header="'E-mail:'" />
      <ModalFieldItem :header="'Aircraft type:'" />
      <ModalFieldItem :header="'Aircraft reg:'" />
      <ModalFieldItem :header="'Purpose of flight:'" />
      <ModalAreaItem :header="'Locations and schedule:'" :input-style="{ height: '90px' }" />
    </template>
    <template v-slot:main-content>
      <FieldHeaderItem :header="'Services required:'" />

      <div class="check-boxes">
        <ul class="check-list">
          <CheckItem :title="'Landing & o/f permits'" />
          <CheckItem :title="'Ground handling'" />
          <CheckItem :title="'Catering'" />
          <CheckItem :title="'Hotac'" />
        </ul>

        <ul class="check-list">
          <CheckItem :title="'Airport service'" />
          <CheckItem :title="'VIP/Business lounge'" />
          <CheckItem :title="'Fuel'" />
          <CheckItem :title="'Other'" />
        </ul>
      </div>
    </template>
  </ModalForm>
</template>

<style scoped lang="scss">
.check-boxes {
  grid-column: 7 span;
  display: flex;
  align-items: center;
  gap: 30px;
}

.check-list {
  display: flex;
  flex-direction: column;
  gap: 21px;
}
</style>
