<template>
  <main class="search">
    <div class="container">
      <div class="search__wrapper">
        <div class="search__header">
          <BreadCrumbsItem />
          <SearchForm />
        </div>

        <div class="search__results">
          <SearchItem
            v-for="searchItem in searchItems"
            :key="searchItem.id"
            :title="searchItem.title"
            :text="searchItem.text"
          />
        </div>

        <div class="pagination">
          <div class="pagination__wrapper">
            <PaginationButton>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.68055 4.9998L5.46281 1.21774C5.73461 0.94583 5.73461 0.505035 5.46281 0.233232C5.191 -0.0386814 4.75023 -0.0386814 4.47832 0.233232L0.203764 4.50772C0.0678625 4.64369 -1.04904e-05 4.8217 -1.04904e-05 4.9998C-1.04904e-05 5.17796 0.0679951 5.35611 0.203764 5.49201L4.47832 9.76645C4.75023 10.0385 5.19103 10.0385 5.46281 9.76645C5.73461 9.49465 5.73461 9.05381 5.46281 8.78203L1.68055 4.9998ZM9.79615 8.78203C10.068 9.05383 10.068 9.49467 9.79615 9.76645C9.52434 10.0385 9.0837 10.0385 8.81164 9.76645L4.53708 5.49203C4.40118 5.35613 4.33342 5.17799 4.33342 4.99982C4.33342 4.82172 4.40131 4.64358 4.53708 4.50774L8.81164 0.233232C9.08368 -0.0386814 9.52434 -0.0386814 9.79615 0.233232C10.068 0.505035 10.068 0.945808 9.79615 1.21774L6.01381 4.9998L9.79615 8.78203Z"
                  fill="#1D2D42"
                />
              </svg>
            </PaginationButton>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BreadCrumbsItem from '@/components/BreadCrumbsItem.vue'
import PaginationButton from '@/components/PaginationButton.vue'
import SearchForm from '@/components/SearchForm.vue'
import SearchItem from '@/components/SearchItem.vue'

import { searchItems } from '@/data'
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

  &__results {
    padding: 32px 0;
    gap: 31px;
    display: flex;
    flex-direction: column;

    @media (max-width: 398px) {
      padding: 20px 0;
    }

    ::v-deep(.search-item) {
      .underline:last-child {
        display: none;
      }

      &:last-child {
        .underline:last-child {
          display: block;
        }
      }
    }
  }
}
</style>
