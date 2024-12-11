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
      <ModalFieldItem header="Company name:" :validationName="'companyName'" />
      <ModalFieldItem header="E-mail:" :validationName="'email'" />

      <ModalChecks errorName="carriageType" title="Carriage type:">
        <template v-slot:list-left>
          <CheckItem type="single" name="carriageType" title="Regular flight" value="regular" />
        </template>
        <template v-slot:list-right>
          <CheckItem type="single" name="carriageType" title="Charter flight" value="charter" />
        </template>
      </ModalChecks>

      <ModalAreaItem
        :validationName="'route'"
        :header="'Route and preferable schedule:'"
        :input-style="{ height: '90px' }"
      />
      <ModalFieldItem :header="'Passenger number:'" :validationName="'passengerNumber'" />
    </template>
    <template v-slot:main-content>
      <ModalChecks errorName="checkboxes" :title="'Passenger category:'">
        <template v-slot:list-left>
          <CheckItem name="checkboxes" title="Business/VIP" value="businessVip" />
          <CheckItem name="checkboxes" title="Tourism" value="tourism" />
          <CheckItem name="checkboxes" title="Other" value="other" />
        </template>
        <template v-slot:list-right>
          <CheckItem name="checkboxes" title="Marine travel" value="marineTravel" />
          <CheckItem name="checkboxes" title="Sport event" value="sportEvent" />
        </template>
      </ModalChecks>
    </template>
  </ModalForm>
</template>
