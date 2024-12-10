<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'

import { Form } from 'vee-validate'
import type { Schema } from 'yup'

import ButtonItem from './ButtonItem.vue'
import ModalAreaItem from './ModalAreaItem.vue'
import AddFile from './AddFile.vue'

const props = defineProps<{
  title: string
  isOpen: boolean
  validationSchema: Schema
}>()

const emit = defineEmits(['close'])

const dialogModal = ref<HTMLElement | null>(null)

const handleCloseModal = () => {
  emit('close')
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    handleCloseModal()
  }
}

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      dialogModal.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  },
)

const onSubmitForm = (values: Record<string, string>) => {
  alert(JSON.stringify(values, null, 2))
  handleCloseModal()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.addEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div :class="['dialog-backdrop', { 'dialog-backdrop--active': isOpen }]"></div>
  <div ref="dialogModal" :class="['dialog-modal', { 'dialog-modal--open': isOpen }]">
    <div class="dialog-modal__header">
      <span class="dialog-modal__title">{{ title }}</span>

      <button class="dialog-close" @click="handleCloseModal">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.31819 0.397739C1.78787 -0.13258 0.928057 -0.132579 0.397738 0.397739C-0.13258 0.928057 -0.132579 1.78787 0.397739 2.31819L8.07957 10L0.397778 17.6818C-0.132541 18.2121 -0.13254 19.0719 0.397778 19.6023C0.928096 20.1326 1.78791 20.1326 2.31823 19.6023L10 11.9205L17.6818 19.6023C18.2121 20.1326 19.0719 20.1326 19.6023 19.6023C20.1326 19.0719 20.1326 18.2121 19.6023 17.6818L11.9205 10L19.6023 2.31819C20.1326 1.78787 20.1326 0.928057 19.6023 0.397739C19.072 -0.132579 18.2122 -0.132579 17.6818 0.397739L10 8.07957L2.31819 0.397739Z"
            fill="white"
          />
        </svg>
      </button>
    </div>

    <div class="dialog-modal__content">
      <Form @submit="onSubmitForm" class="modal-form" :validation-schema="validationSchema">
        <div class="modal-form__top">
          <slot name="top-content"></slot>
        </div>

        <div class="modal-form__content">
          <slot name="main-content"></slot>

          <ModalAreaItem :header="'Remarks:'" :input-style="{ height: '135px' }" />

          <div class="modal-form__bottom">
            <AddFile />

            <ButtonItem variant="fill-contrast">Send</ButtonItem>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(29, 45, 66, 0.3);
  opacity: 0;
  z-index: -2;
  transition: all 0.4s ease-in-out;

  &--active {
    opacity: 1;
    z-index: 1;
  }
}

.dialog-modal {
  position: absolute;
  top: 0;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: vars.$light;
  width: 945px;
  max-width: 100%;

  z-index: -2;
  transition: all vars.$transition;

  @media (max-width: 1020px) {
    max-width: 90%;
  }

  &--open {
    top: 174px;
    opacity: 1;
    z-index: 2;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: vars.$blue;
    width: 100%;
    height: 70px;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: vars.$light;
    padding-left: 41px;

    @media (max-width: 520px) {
      padding-left: 20px;
      font-size: 16px;
    }

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }

  &__content {
    padding: 30px 0;

    @media (max-width: 520px) {
      padding: 20px 0 15px;
    }
  }
}

.dialog-close {
  cursor: pointer;
  width: 70px;
  height: 100%;
  background-color: vars.$darkBlue;

  svg {
    transition: all vars.$transition;
  }

  @include mixins.hover {
    svg {
      transform: rotate(90deg);
    }
  }
}

.modal-form {
  &__top {
    display: flex;
    flex-direction: column;
    gap: 23px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 37px 50px 0;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
      gap: 15px;
    }

    @media (max-width: 520px) {
      padding: 25px 20px;
    }

    @media (max-width: 440px) {
      align-items: center;
    }
  }
}
</style>
