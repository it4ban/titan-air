<script setup lang="ts">
import ButtonItem from './ButtonItem.vue'
</script>

<template>
  <dialog class="dialog-modal">
    <div class="dialog-modal__header">
      <span class="dialog-modal__header">Ground handling request form</span>
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
          <div class="modal-field">
            <span class="field-header">Company name:</span>
            <input type="text" class="modal-field__input" />
          </div>
          <div class="modal-field">
            <span class="field-header">E-mail:</span>
            <input type="text" class="modal-field__input" />
          </div>
          <div class="modal-field">
            <span class="field-header">Aircraft type:</span>
            <input type="text" class="modal-field__input" />
          </div>
          <div class="modal-field">
            <span class="field-header">Aircraft reg:</span>
            <input type="text" class="modal-field__input" />
          </div>
          <div class="modal-field">
            <span class="field-header">Purpose of flight:</span>
            <input type="text" class="modal-field__input" />
          </div>
          <div class="modal-field">
            <span class="field-header">Locations and schedule:</span>
            <input type="text" class="modal-field__input" />
          </div>

          <div class="modal-checks">
            <span class="field-header">Services required:</span>

            <div class="modal-checks__list-wrapper">
              <ul class="check-list">
                <li class="check-list__item">
                  <div class="check-list__checkbox">
                    <input type="checkbox" name="" id="" />
                    <div class="check-list__icon"></div>
                  </div>
                  <p class="check-list__item-title">Landing & o/f permits</p>
                </li>
                <li class="check-list__item">
                  <div class="check-list__checkbox">
                    <input type="checkbox" name="" id="" />
                    <div class="check-list__icon"></div>
                  </div>
                  <p class="check-list__item-title">Ground handling</p>
                </li>
                <li class="check-list__item">
                  <div class="check-list__checkbox">
                    <input type="checkbox" name="" id="" />
                    <div class="check-list__icon"></div>
                  </div>
                  <p class="check-list__item-title">Catering</p>
                </li>
                <li class="check-list__item">
                  <div class="check-list__checkbox">
                    <input type="checkbox" name="" id="" />
                    <div class="check-list__icon"></div>
                  </div>
                  <p class="check-list__item-title">Hotac</p>
                </li>
              </ul>

              <ul class="check-list">
                <li class="check-list__item">
                  <div class="check-list__checkbox">
                    <input type="checkbox" name="" id="" />
                    <div class="check-list__icon"></div>
                  </div>
                  <p class="check-list__item-title">Airport service</p>
                </li>
                <li class="check-list__item">
                  <div class="check-list__checkbox">
                    <input type="checkbox" name="" id="" />
                    <div class="check-list__icon"></div>
                  </div>
                  <p class="check-list__item-title">VIP/Business lounge</p>
                </li>
                <li class="check-list__item">
                  <div class="check-list__checkbox">
                    <input type="checkbox" name="" id="" />
                    <div class="check-list__icon"></div>
                  </div>
                  <p class="check-list__item-title">Fuel</p>
                </li>
                <li class="check-list__item">
                  <div class="check-list__checkbox">
                    <input type="checkbox" name="" id="" />
                    <div class="check-list__icon"></div>
                  </div>
                  <p class="check-list__item-title">Other</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="modal-field">
            <span class="field-header">Remarks:</span>
            <input type="text" class="modal-field__input" />
          </div>
        </div>

        <div class="modal-form__bottom">
          <div class="add-file">
            <ButtonItem variant="fill"> Add file </ButtonItem>
          </div>

          <ButtonItem variant="fill">Send</ButtonItem>
        </div>
      </form>
    </div>
  </dialog>
</template>

<style scoped lang="scss"></style>
