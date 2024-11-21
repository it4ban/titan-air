<script setup lang="ts"></script>

<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="/" class="breadcrumbs__link">Home</a>
    </li>
    <li class="breadcrumbs__item">
      <a href="#" class="breadcrumbs__link breadcrumbs__link--active">Flight support service</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 7px;
  padding-top: 26px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '';
      display: block;
      margin-left: 7px;
      flex-grow: 0;
      flex-shrink: 0;
      width: 1.2px;
      height: 13px;
      background-color: #455c7d;

      @media (max-width: 480px) {
        display: none;
      }
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  &__link {
    color: #455c7d;
    font-weight: 400;

    &--active {
      font-weight: bold;
      color: vars.$gray;
      text-decoration: underline;
    }
  }
}
</style>
