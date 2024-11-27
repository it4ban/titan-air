<script setup lang="ts">
import ModalForm from './ModalForm.vue'
import ModalFieldItem from './ModalFieldItem.vue'
import ModalAreaItem from './ModalAreaItem.vue'
import CheckItem from './CheckItem.vue'
import FieldHeaderItem from './FieldHeaderItem.vue'

import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <ModalForm
    :isOpen="modalStore.modalStates.groundModal"
    @close="modalStore.closeModal('groundModal')"
    title="asdasd"
  >
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
