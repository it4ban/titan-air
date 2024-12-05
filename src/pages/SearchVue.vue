<template>
  <main class="search">
    <div class="container">
      <div class="search__wrapper">Search</div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.search {
  width: 100%;

  &__wrapper {
    padding-top: 120px;
  }
}
</style>
