<script setup lang="ts">
defineProps<{
  items: string[]
  currentItemIndex: number
}>()
</script>

<template>
  <aside class="left-aside">
    <ul class="left-menu">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="['left-menu__item', { 'left-menu__item--active': index === currentItemIndex }]"
      >
        <a href="#" class="left-menu__link">
          {{ item }}

          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.7779 4.6098L1.32777 0.159755C1.22485 0.0567475 1.08745 0 0.940948 0C0.794445 0 0.657048 0.0567475 0.554122 0.159755L0.226401 0.487394C0.0131509 0.700889 0.0131509 1.04788 0.226401 1.26105L3.96328 4.99793L0.222255 8.73895C0.119329 8.84196 0.0625 8.97928 0.0625 9.1257C0.0625 9.27228 0.119329 9.4096 0.222255 9.51269L0.549976 9.84025C0.652983 9.94325 0.790299 10 0.936802 10C1.0833 10 1.2207 9.94325 1.32363 9.84025L5.7779 5.38614C5.88107 5.2828 5.93774 5.14484 5.93741 4.99817C5.93774 4.85094 5.88107 4.71305 5.7779 4.6098Z"
              fill="#C4C4C4"
            />
          </svg>
        </a>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.left-aside {
  grid-column: 4 span;
  min-width: 210px;

  @media (max-width: 548px) {
    grid-column: 12 span;
  }
}

.left-menu {
  display: flex;
  flex-direction: column;

  &__item {
    border-bottom: 1px solid vars.$gray;
    background-color: vars.$grayLight;
    height: 49px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all vars.$transition;

    &:first-child {
      border-top: 1px solid vars.$gray;
    }

    @include mixins.hover {
      background-color: vars.$blue;

      .left-menu__link {
        color: vars.$light;
      }
    }

    &--active {
      background-color: vars.$blue;

      .left-menu__link {
        color: vars.$light;
      }
    }
  }

  &__link {
    padding: 0 17px 0 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    @media (max-width: 656px) {
      font-size: 14px;
    }
  }
}
</style>
