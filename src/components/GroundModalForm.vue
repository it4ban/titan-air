<script setup lang="ts">
import ModalForm from './ModalForm.vue'
import ModalFieldItem from './ModalFieldItem.vue'
import ModalAreaItem from './ModalAreaItem.vue'
import CheckItem from './CheckItem.vue'
import ModalChecks from './ModalChecks.vue'

import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <ModalForm
    :isOpen="modalStore.modalStates.groundModal"
    @close="modalStore.closeModal('groundModal')"
    title="Ground handling request form"
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
      <ModalChecks :title="'Services required:'">
        <template v-slot:list-left>
          <CheckItem :title="'Landing & o/f permits'" />
          <CheckItem :title="'Ground handling'" />
          <CheckItem :title="'Catering'" />
          <CheckItem :title="'Hotac'" />
        </template>
        <template v-slot:list-right>
          <CheckItem :title="'Airport service'" />
          <CheckItem :title="'VIP/Business lounge'" />
          <CheckItem :title="'Fuel'" />
          <CheckItem :title="'Other'" />
        </template>
      </ModalChecks>
    </template>
  </ModalForm>
</template>
