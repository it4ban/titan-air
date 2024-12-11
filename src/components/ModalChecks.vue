<script setup lang="ts">
import { ErrorMessage } from 'vee-validate'
import FieldHeaderItem from './FieldHeaderItem.vue'

defineProps<{
  title: string
  errorName: string
}>()
</script>

<template>
  <div class="modal-checks">
    <FieldHeaderItem :header="title" />

    <div class="modal-checks__wrapper">
      <div class="check-boxes">
        <ul class="check-list">
          <slot name="list-left"></slot>
        </ul>

        <ul class="check-list">
          <slot name="list-right"></slot>
        </ul>

        <ErrorMessage :name="errorName" v-slot="{ message }">
          <p class="error-checks">
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
              ></path>
            </svg>
            {{ message }}
          </p>
        </ErrorMessage>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-checks {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding: 34px 50px;

  @media (max-width: 670px) {
    row-gap: 20px;
  }

  @media (max-width: 520px) {
    padding: 25px 20px;
  }

  &__wrapper {
    grid-column: 7 span;

    @media (max-width: 670px) {
      gap: 15px;
      grid-column: 12 span;
    }
  }
}

.check-boxes {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 263px));
  gap: 30px;
}

.check-list {
  grid-column: 1 span;
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media (max-width: 578px) {
    grid-column: 2 span;
  }
}

.error-checks {
  grid-column: 2 span;
  color: #ec3a3a;
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 340px) {
    grid-column: 2 span;
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
  }
}
</style>
