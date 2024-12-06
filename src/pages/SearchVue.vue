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
            <PaginationButton>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.149902 4.99991C0.149902 4.82075 0.218311 4.64155 0.354817 4.50492L4.6547 0.205141C4.92822 -0.0683805 5.37169 -0.0683805 5.6451 0.205141C5.91852 0.478552 5.91852 0.921933 5.6451 1.19548L1.84039 4.99991L5.64484 8.80449C5.91825 9.0779 5.91825 9.52135 5.64484 9.79474C5.37143 10.0684 4.92809 10.0684 4.65457 9.79474L0.354662 5.49503C0.218178 5.35832 0.149902 5.17913 0.149902 4.99991Z"
                  fill="#1D2D42"
                />
              </svg>
            </PaginationButton>
            <PaginationButton> 1 </PaginationButton>
            <PaginationButton> 2 </PaginationButton>
            <PaginationButton> 3 </PaginationButton>
            <PaginationButton> ... </PaginationButton>
            <PaginationButton> 28 </PaginationButton>
            <PaginationButton>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.8501 4.99991C5.8501 4.82075 5.78169 4.64155 5.64518 4.50492L1.3453 0.205141C1.07178 -0.0683805 0.628307 -0.0683805 0.354896 0.205141C0.0814848 0.478552 0.0814848 0.921933 0.354896 1.19548L4.15961 4.99991L0.355162 8.80449C0.0817504 9.0779 0.0817504 9.52135 0.355162 9.79474C0.628572 10.0684 1.07191 10.0684 1.34543 9.79474L5.64534 5.49503C5.78182 5.35832 5.8501 5.17913 5.8501 4.99991Z"
                  fill="#1D2D42"
                />
              </svg>
            </PaginationButton>
            <PaginationButton>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.31945 4.9998L4.53719 1.21774C4.26539 0.94583 4.26539 0.505035 4.53719 0.233232C4.809 -0.0386814 5.24977 -0.0386814 5.52168 0.233232L9.79624 4.50772C9.93214 4.64369 10 4.8217 10 4.9998C10 5.17796 9.932 5.35611 9.79624 5.49201L5.52168 9.76645C5.24977 10.0385 4.80897 10.0385 4.53719 9.76645C4.26539 9.49465 4.26539 9.05381 4.53719 8.78203L8.31945 4.9998ZM0.203852 8.78203C-0.0679508 9.05383 -0.0679508 9.49467 0.203852 9.76645C0.475656 10.0385 0.916296 10.0385 1.18836 9.76645L5.46292 5.49203C5.59882 5.35613 5.66658 5.17799 5.66658 4.99982C5.66658 4.82172 5.59869 4.64358 5.46292 4.50774L1.18836 0.233232C0.916318 -0.0386814 0.475656 -0.0386814 0.203852 0.233232C-0.0679508 0.505035 -0.0679508 0.945808 0.203852 1.21774L3.98619 4.9998L0.203852 8.78203Z"
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

.pagination {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 34px;
  }
}
</style>
