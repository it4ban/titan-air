<script setup lang="ts">
import ButtonItem from './ButtonItem.vue'
import ModalFieldItem from './ModalFieldItem.vue'
import FieldHeaderItem from './FieldHeaderItem.vue'
import CheckItem from './CheckItem.vue'
import ModalAreaItem from './ModalAreaItem.vue'
import AddFile from './AddFile.vue'

const props = defineProps<{
  // id: string
  title: string
  // isActive: boolean
}>()
</script>

<template>
  <div class="send-request">
    <div class="dialog-backdrop"></div>
    <div class="dialog-modal">
      <div class="dialog-modal__header">
        <span class="dialog-modal__title">{{ props.title }}</span>

        <button class="dialog-close">
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
        <form action="#" class="modal-form">
          <div class="modal-form__top">
            <ModalFieldItem :header="'Company name:'" />
            <ModalFieldItem :header="'E-mail:'" />
            <ModalFieldItem :header="'Aircraft type:'" />
            <ModalFieldItem :header="'Aircraft reg:'" />
            <ModalFieldItem :header="'Purpose of flight:'" />
            <ModalAreaItem :header="'Locations and schedule:'" :input-style="{ height: '90px' }" />
          </div>

          <div class="modal-form__content">
            <div class="modal-checks">
              <div class="modal-checks__wrapper">
                <FieldHeaderItem :header="'Services required:'" />

                <div class="modal-checks__list-wrapper">
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
              </div>
            </div>

            <ModalAreaItem :header="'Remarks:'" :input-style="{ height: '135px' }" />

            <div class="modal-form__bottom">
              <AddFile />

              <ButtonItem variant="fill-contrast">Send</ButtonItem>
            </div>
          </div>
        </form>
      </div>
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
}

.dialog-modal {
  position: absolute;
  top: 0;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: vars.$light;
  width: 945px;
  z-index: -2;

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
  }

  &__content {
    padding: 30px 0;
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
  }
}

.modal-checks {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: 34px 50px;
  }

  &__list-wrapper {
    grid-column: 7 span;
    display: flex;
    align-items: center;
    gap: 30px;
  }
}

.check-list {
  display: flex;
  flex-direction: column;
  gap: 21px;
}
</style>
