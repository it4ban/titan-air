<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  transparent?: boolean
  iconVariant?: 'light' | 'dark'
}>()

const isActive = ref(false)

function toggleSearchForm() {
  isActive.value = !isActive.value
}
</script>

<template>
  <form action="" class="search-form">
    <input
      type="text"
      :class="['search-form__input', { 'search-form__input--active': isActive }]"
    />
    <a
      href="#"
      ref="icon"
      :class="[
        transparent || isActive ? 'icon icon--transparent' : 'icon',
        'search-form__icon',
        { 'search-form__icon--active': isActive },
      ]"
      @click.prevent="toggleSearchForm"
    >
      <svg
        :class="['variant-' + (iconVariant === 'dark' ? 'dark' : 'light')]"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.6084 13.7175L12.1325 10.2416C12.114 10.2232 12.0923 10.2103 12.073 10.1931C12.757 9.15558 13.1561 7.91368 13.1561 6.57813C13.1561 2.94511 10.211 0 6.57807 0C2.94511 0 0 2.94511 0 6.57807C0 10.211 2.94505 13.1561 6.578 13.1561C7.91361 13.1561 9.15545 12.757 10.1929 12.073C10.2101 12.0923 10.223 12.1139 10.2415 12.1324L13.7174 15.6084C14.2396 16.1305 15.0861 16.1305 15.6084 15.6084C16.1305 15.0862 16.1305 14.2396 15.6084 13.7175ZM6.57807 10.8757C4.20446 10.8757 2.28035 8.95161 2.28035 6.57807C2.28035 4.20446 4.20453 2.28035 6.57807 2.28035C8.95155 2.28035 10.8757 4.20453 10.8757 6.57807C10.8757 8.95161 8.95155 10.8757 6.57807 10.8757Z"
          fill="#1D2D42"
        />
      </svg>
    </a>
  </form>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.search-form {
  display: flex;
  position: relative;

  &__input {
    background-color: vars.$light;
    border-radius: 30px;
    width: 0;
    opacity: 0;
    height: 50px;
    font-size: 14px;
    color: vars.$darkBlue;
    padding: 0 20px;
    position: absolute;
    right: 1px;
    z-index: 1;
    transition: all vars.$transition;

    &--active {
      width: 300px;
      opacity: 1;
    }
  }

  &__icon {
    z-index: 2;

    &--active {
      svg path {
        fill: vars.$blue;
      }
    }
  }
}
</style>
