<script setup lang="ts">
import ModalForm from './ModalForm.vue'
import ModalFieldItem from './ModalFieldItem.vue'
import ModalAreaItem from './ModalAreaItem.vue'
import CheckItem from './CheckItem.vue'
import ModalChecks from './ModalChecks.vue'

import { groundValidationSchema } from '@/utils'
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <ModalForm
    :isOpen="modalStore.modalStates.groundModal"
    :validationSchema="groundValidationSchema"
    @close="modalStore.closeModal('groundModal')"
    title="Ground handling request form"
  >
    <template v-slot:top-content>
      <ModalFieldItem :header="'Company name:'" :validationName="'companyName'" />
      <ModalFieldItem :header="'E-mail:'" :validationName="'email'" />
      <ModalFieldItem :header="'Aircraft type:'" :validationName="'aircraftType'" />
      <ModalFieldItem :header="'Aircraft reg:'" :validationName="'aircraftReg'" />
      <ModalFieldItem :header="'Purpose of flight:'" :validationName="'purpose'" />
      <ModalAreaItem
        :header="'Locations and schedule:'"
        :input-style="{ height: '90px' }"
        :validationName="'location'"
      />
    </template>
    <template v-slot:main-content>
      <ModalChecks errorName="checkboxes" :title="'Services required:'">
        <template v-slot:list-left>
          <CheckItem name="checkboxes" title="Landing & o/f permits" value="landing&permits" />
          <CheckItem name="checkboxes" title="Ground handling" value="groundHandling" />
          <CheckItem name="checkboxes" title="Catering" value="catering" />
          <CheckItem name="checkboxes" title="Hotac" value="hotac" />
        </template>
        <template v-slot:list-right>
          <CheckItem name="checkboxes" title="Airport service" value="airService" />
          <CheckItem name="checkboxes" title="VIP/Business lounge" value="vipLounge" />
          <CheckItem name="checkboxes" title="Fuel" value="fuel" />
          <CheckItem name="checkboxes" title="Other" value="other" />
        </template>
      </ModalChecks>
    </template>
  </ModalForm>
</template>
