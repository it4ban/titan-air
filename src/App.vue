<script setup lang="ts">
import HeaderItem from './components/HeaderItem.vue'
import BreadCrumbsItem from './components/BreadCrumbsItem.vue'
import ServiceFilterItem from './components/ServiceFilterItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <HeaderItem />

  <main class="all">
    <div class="all__wrapper">
      <section class="banner">
        <div class="container">
          <BreadCrumbsItem />

          <div class="banner__img">
            <img
              src="./assets/img/support/plane.png"
              srcset="./assets/img/support/plane@2x.png 2x"
              loading="lazy"
              alt="Plane"
            />
          </div>
        </div>
      </section>

      <section class="page">
        <div class="container">
          <div class="page-description">
            <p class="title"><span>Flight</span> support service</p>

            <p class="page-description__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <div class="underline"></div>
          </div>

          <div class="page-content">
            <ServiceFilterItem />
          </div>
        </div>
      </section>
    </div>
  </main>

  <FooterItem />
</template>

<style scoped lang="scss">
.all {
  &__wrapper {
    padding: 100px 0 57px;

    @media (max-width: 420px) {
      padding-bottom: 35px;
    }
  }
}
.banner {
  background-image: url('assets/img/support/top-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;

  @media (max-width: 420px) {
    height: 250px;
  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
      padding-top: 20px;
    }

    @media (max-width: 378px) {
      padding-top: 50px;
    }
  }
}

.page-description {
  padding: 36px 0 24px;

  @media (max-width: 520px) {
    padding: 20px 0;
  }

  &__text {
    padding: 26px 0 31px;
    line-height: 25px;

    @media (max-width: 520px) {
      font-size: 14px;
      padding: 20px 0;
    }

    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
}
</style>
