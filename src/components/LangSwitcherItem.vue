<script setup lang="ts"></script>

<template>
  <div class="lang">
    <div class="icon lang__wrapper">
      <p class="lang__current">En</p>
      <span class="lang__icon">
        <svg width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L6.00009 9.10372e-05L3.00009 3L0 0Z" fill="white" />
        </svg>
      </span>
    </div>

    <div class="lang-variants">
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
  }

  &__icon {
    display: flex;
    align-items: center;
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
  transition: all vars.$transition;
  padding: 5px;
  background-color: vars.$darkBlue;

  &--open {
    height: 142px;
    opacity: 1;
  }

  &__value {
    color: vars.$light;
    width: 40px;
    height: 40px;

    @include mixins.hover {
      background-color: #2e4461;
    }
  }
}
</style>
