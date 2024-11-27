<script setup lang="ts">
import ModalForm from './ModalForm.vue'
import ModalFieldItem from './ModalFieldItem.vue'
import ModalAreaItem from './ModalAreaItem.vue'
import ModalChecks from './ModalChecks.vue'
import CheckItem from './CheckItem.vue'

import { useModalStore } from '@/stores/modal'
import { airValidationSchema } from '@/utils'

const modalStore = useModalStore()
</script>

<template>
  <ModalForm
    :isOpen="modalStore.modalStates.airModal"
    :validationSchema="airValidationSchema"
    @close="modalStore.closeModal('airModal')"
    title="Air carriage request form"
  >
    <template v-slot:top-content>
      <ModalFieldItem :header="'Company name:'" :validationName="'companyName'" />
      <ModalFieldItem :header="'E-mail:'" :validationName="'email'" />

      <ModalChecks :title="'Carriage type:'">
        <template v-slot:list-left>
          <CheckItem :title="'Regular flight'" />
        </template>
        <template v-slot:list-right>
          <CheckItem :title="'Charter flight'" />
        </template>
      </ModalChecks>

      <ModalAreaItem :header="'Route and preferable schedule:'" :input-style="{ height: '90px' }" />
      <ModalFieldItem :header="'Passenger number:'" :validationName="'passengerNumber'" />
    </template>
    <template v-slot:main-content>
      <ModalChecks :title="'Passenger category:'">
        <template v-slot:list-left>
          <CheckItem :title="'Business/VIP'" />
          <CheckItem :title="'Tourism'" />
          <CheckItem :title="'Other'" />
        </template>
        <template v-slot:list-right>
          <CheckItem :title="'Marine travel'" />
          <CheckItem :title="'Sport event'" />
        </template>
      </ModalChecks>
    </template>
  </ModalForm>
</template>
