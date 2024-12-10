<script setup lang="ts">
import { toRefs } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps<{
  title: string
  name: string
  value: string
}>()

// const checkButton = ref<HTMLElement | null>(null)
const { name } = toRefs(props)

const { checked, handleChange } = useField(name, undefined, {
  type: 'checkbox',
  checkedValue: props.value,
})
</script>

<template>
  <button type="button" class="check-item" @click="handleChange(value)">
    <div class="check-item__checkbox">
      <div :class="['check-item__icon', { 'check-item__icon--checked': checked }]">
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.26996 7.52539C4.18132 7.61607 4.06039 7.66666 3.93477 7.66666C3.80915 7.66666 3.68822 7.61607 3.59958 7.52539L0.208356 4.13564C-0.0694519 3.85309 -0.0694519 3.39492 0.208356 3.11289L0.543548 2.77189C0.821442 2.48934 1.2714 2.48934 1.54921 2.77189L3.93477 5.13845L8.45079 0.545241C8.72868 0.262691 9.17908 0.262691 9.45645 0.545241L9.79165 0.886244C10.0695 1.16879 10.0695 1.62688 9.79165 1.90899L4.26996 7.52539Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <p class="check-item__title">{{ title }} {{ checked ? value : '' }}</p>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.check-item {
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 398px) {
    gap: 12px;
  }

  &__input {
    display: none;
  }

  &__icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background-color: transparent;
    border: 1px solid #b3b3b3;
    transition: all 0.2s ease-in-out;
    user-select: none;

    &--checked {
      border-color: transparent;
      background-color: vars.$blue;
    }
  }

  &__title {
    font-weight: 400;
    color: vars.$blue;

    @media (max-width: 398px) {
      font-size: 14px;
    }
  }
}
</style>
