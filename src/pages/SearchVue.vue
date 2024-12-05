<template>
  <main class="search">
    <div class="container">
      <div class="search__wrapper">
        <div class="search__header">
          <BreadCrumbsItem />
          <SearchForm />
        </div>

        <div class="search__results">da</div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BreadCrumbsItem from '@/components/BreadCrumbsItem.vue'
import SearchForm from '@/components/SearchForm.vue'
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.search {
  width: 100%;

  &__wrapper {
    padding-top: 120px;

    @media (max-width: 480px) {
      padding-top: 100px;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 47px;

    @media (max-width: 480px) {
      gap: 25px;
    }
  }
}
</style>
