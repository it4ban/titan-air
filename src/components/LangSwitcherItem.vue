<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  transparent?: boolean
  variant?: 'darken' | 'lighten'
}>()

const isOpened = ref(false)
const currentLang = ref<HTMLElement | null>(null)

function toggleLangMenu() {
  isOpened.value = !isOpened.value

  if (props.variant === 'darken') {
    currentLang.value?.classList.toggle('lang__current--darken')
  }
}
</script>

<template>
  <div class="lang" @click="toggleLangMenu">
    <div :class="[transparent ? 'icon icon--transparent' : 'icon', 'lang__wrapper']">
      <p
        ref="currentLang"
        :class="['lang__current', { 'lang__current--darken': variant === 'darken' }]"
      >
        En
      </p>
      <span :class="['lang__icon', { 'lang__icon--rotate': isOpened }]">
        <svg
          :class="['variant-' + (variant === 'darken' ? 'dark' : 'light')]"
          width="6"
          height="3"
          viewBox="0 0 6 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L6.00009 9.10372e-05L3.00009 3L0 0Z" fill="white" />
        </svg>
      </span>
    </div>

    <div :class="['lang-variants', { 'lang-variants--open': isOpened }]">
      <span class="icon lang-variants__value">Ru</span>
      <span class="icon lang-variants__value">No</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.lang {
  position: relative;

  &__wrapper {
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  &__current {
    color: vars.$light;
    z-index: 2;
    font-size: 18px;
    font-weight: bold;

    &--darken {
      color: vars.$blue;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    z-index: 2;
    transition: all vars.$transition;

    &--rotate {
      transform: rotate(180deg);

      svg path {
        fill: vars.$light;
      }
    }
  }
}

.lang-variants {
  z-index: -1;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 50px;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all vars.$transition;
  padding: 5px;
  background-color: vars.$darkBlue;

  &--open {
    height: 142px;
    opacity: 1;
    z-index: 1;
  }

  &__value {
    color: vars.$light;
    font-size: 18px;
    font-weight: bold;
    width: 40px;
    height: 40px;

    @include mixins.hover {
      background-color: #2e4461;
    }
  }
}
</style>
