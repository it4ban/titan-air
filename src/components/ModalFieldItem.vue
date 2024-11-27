<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'

import FieldHeaderItem from './FieldHeaderItem.vue'

defineProps<{
  header: string
  validationName: string
}>()
</script>

<template>
  <div class="modal-field">
    <div class="modal-field__wrapper">
      <FieldHeaderItem :header="header" />

      <div class="modal-field__input-wrapper">
        <Field :name="validationName" class="modal-field__input" />

        <ErrorMessage :name="validationName" v-slot="{ message }">
          <div class="error">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5844 14.998L12.5194 2.01069C11.3843 0.0997154 8.61722 0.0971763 7.48058 2.01069L0.415894 14.998C-0.744497 16.9507 0.660386 19.4235 2.93472 19.4235H17.065C19.3375 19.4235 20.7448 16.9527 19.5844 14.998ZM10 17.0797C9.35398 17.0797 8.82812 16.5539 8.82812 15.9079C8.82812 15.2618 9.35398 14.736 10 14.736C10.646 14.736 11.1719 15.2618 11.1719 15.9079C11.1719 16.5539 10.646 17.0797 10 17.0797ZM11.1719 12.3922C11.1719 13.0382 10.646 13.5641 10 13.5641C9.35398 13.5641 8.82812 13.0382 8.82812 12.3922V6.53285C8.82812 5.88683 9.35398 5.36097 10 5.36097C10.646 5.36097 11.1719 5.88683 11.1719 6.53285V12.3922Z"
                fill="#EC3A3A"
              />
            </svg>

            <div class="error__message">
              {{ message }}
            </div>
          </div>
        </ErrorMessage>
      </div>
    </div>
  </div>
</template>
