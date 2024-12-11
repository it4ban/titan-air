<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { useBreakpoints } from '@/hooks'

defineProps<{
  transparent?: boolean
  iconVariant?: 'light' | 'dark'
}>()

const { screenWidth } = useBreakpoints()

const isActive = ref(false)

const searchInput = ref<string>('')
const searchPopupInput = computed({
  get: () => searchInput.value,
  set: (value: string) => (searchInput.value = value),
})

const toggleSearchForm = () => {
  isActive.value = !isActive.value
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    isActive.value = false
  }
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))
</script>

<template>
  <form
    action=""
    :class="['search-popup', { 'search-popup--open': isActive && screenWidth < 1120 }]"
  >
    <div class="close-popup">
      <div class="close-popup__wrapper">
        <button class="close-popup__button" @click="toggleSearchForm">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.24265 1.41422C3.4616 0.633168 2.19527 0.633168 1.41422 1.41422C0.633171 2.19527 0.633171 3.4616 1.41422 4.24264L12.7279 15.5564L1.41422 26.8701C0.633168 27.6511 0.633168 28.9174 1.41422 29.6985C2.19527 30.4795 3.4616 30.4795 4.24264 29.6985L15.5564 18.3848L26.8701 29.6985C27.6511 30.4795 28.9174 30.4795 29.6985 29.6985C30.4795 28.9174 30.4795 27.6511 29.6985 26.8701L18.3848 15.5564L29.6985 4.24265C30.4795 3.4616 30.4795 2.19527 29.6985 1.41422C28.9174 0.633169 27.6511 0.63317 26.8701 1.41422L15.5564 12.7279L4.24265 1.41422Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="container">
      <div class="search-popup__wrapper">
        <div class="popup-input">
          <input v-model="searchPopupInput" type="text" class="popup-input__field" />
          <a href="#" class="popup-input__icon">
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
        </div>
      </div>
    </div>
  </form>

  <form action="" class="search-form">
    <input
      v-model="searchInput"
      v-if="screenWidth > 1120"
      type="text"
      :class="['search-form__input', { 'search-form__input--active': isActive }]"
    />
    <a
      href="#"
      ref="icon"
      :class="[
        transparent || isActive ? 'icon icon--transparent' : 'icon',
        'search-form__icon',
        { 'search-form__icon--active': isActive && screenWidth > 1120 },
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
    z-index: 1;

    &--active {
      svg path {
        fill: vars.$blue;
      }
    }
  }
}

.close-popup {
  display: flex;
  justify-content: end;
  width: 100%;

  &__wrapper {
    padding: 25px 20px 0;
  }

  &__button {
    width: 60px;
    height: 60px;
    border: 2px solid vars.$light;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease-in-out;

    svg path {
      transition: all 0.3s ease-in-out;
    }

    @include mixins.hover {
      background-color: vars.$light;

      svg path {
        fill: #222;
      }
    }
  }
}

.search-popup {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(4, 4, 4, 0.54);
  z-index: -2;
  height: 100vh;
  width: 100%;
  transition: all vars.$transition;

  &--open {
    z-index: 3;
    opacity: 1;
    visibility: visible;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
}
.popup-input {
  display: flex;
  align-items: center;
  gap: 25px;
  width: 100%;

  &__field {
    width: 100%;
    border: 2px solid vars.$light;
    padding: 0 25px;
    height: 60px;
    color: vars.$blue;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.7);
    transition: all vars.$transition;

    &:active,
    &:focus {
      box-shadow: 1px 1px 30px 5px rgba(0, 0, 0, 0.35);
    }
  }

  &__icon {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid vars.$light;
    backdrop-filter: blur(3px);

    svg path {
      transition: 0.3s ease-in-out;
    }

    @include mixins.hover {
      background-color: vars.$light;

      svg path {
        fill: #222;
      }
    }
  }
}
</style>
