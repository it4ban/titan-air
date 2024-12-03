<template>
  <section class="two-screen">
    <div class="container">
      <div class="two-screen__wrapper">
        <div class="img-scene">
          <div class="img-scene__image">
            <img
              src="@/assets/img/home/air.png"
              srcset="@/assets/img/home/air@2x.png 2x"
              loading="lazy"
              alt="Air"
            />
          </div>
          <div class="img-scene__big-circle"></div>
          <div class="img-scene__small-circle"></div>
        </div>

        <div class="two-screen__block-right">
          <div class="screen-title">
            <span class="screen-title__header"><span>About</span> us</span>
            <div class="screen-title__underline"></div>
          </div>

          <div class="two-screen__block-texts">
            <p class="screen-text two-screen__text">
              Titan Airservice AS" company, established in 2006, is a team of professionals
              providing airservices in the field of sea-crews transportation on scheduled and
              charter flights, as well as arrangement of ground support for aircraft operating VIP
              flights, tourism travelling programs, transportation of sports teams , official
              delegations and other airtransportation activity worldwide.
            </p>
            <p class="screen-text two-screen__text">
              Due to our customers needs and expectation, our main priority is to deliver our
              clients the best operational and financial results, while ensuring the highest level
              of quality and individual approach without any exceptions.
            </p>
          </div>

          <ButtonItem :variant="'outline-yellow'"> Show more </ButtonItem>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonItem from './ButtonItem.vue'
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.two-screen {
  background-image: url('@/assets/img/home/main-bg-2.jpg');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  position: relative;

  @include mixins.retina-bg {
    background-image: url('@/assets/img/home/main-bg-2@2x.jpg');
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 1120px) {
      padding: 0;
      gap: 15px;
    }

    @media (max-width: 848px) {
      row-gap: 50px;
      padding: 20px 0;
      height: 100%;
    }

    @media (max-width: 480px) {
      column-gap: 0;
    }
  }

  &__block-right {
    grid-column: 8 / 13;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 28px;

    @media (max-width: 848px) {
      grid-column: 1 / 12;
    }

    @media (max-width: 576px) {
      gap: 15px;
    }
  }

  &__text {
    line-height: 25px;

    @media (max-width: 498px) {
      font-size: 14px;
    }
  }
}

.screen-title {
  &__header {
    @media (max-width: 498px) {
      font-size: 22px;
    }
  }

  &__underline {
    &::before {
      width: 64%;
    }
  }
}

.img-scene {
  @media (max-width: 848px) {
    grid-column: 1 / 12;
    grid-row: 2;
    align-self: center;
    justify-self: end;
    max-width: 240px;
    position: relative;
    bottom: 60px;
  }

  @media (max-width: 498px) {
    justify-self: center;
  }

  @media (max-width: 576px) {
    display: none;
  }

  &__big-circle {
    @media (max-width: 848px) {
      max-width: 220px;
      max-height: 220px;
    }
  }

  &__small-circle {
    @media (max-width: 848px) {
      max-width: 120px;
      max-height: 120px;
    }
  }
}
</style>
