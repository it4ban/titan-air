<template>
  <section class="two-screen">
    <div class="container">
      <div class="two-screen__wrapper">
        <div class="img-scene">
          <div class="img-scene__air">
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

          <p class="screen-text two-screen__text">
            Titan Airservice AS" company, established in 2006, is a team of professionals providing
            airservices in the field of sea-crews transportation on scheduled and charter flights,
            as well as arrangement of ground support for aircraft operating VIP flights, tourism
            travelling programs, transportation of sports teams , official delegations and other
            airtransportation activity worldwide. <br />
            Due to our customers needs and expectation, our main priority is to deliver our clients
            the best operational and financial results, while ensuring the highest level of quality
            and individual approach without any exceptions.
          </p>

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
    height: 100vh;
    gap: 30px;
  }

  &__block-right {
    grid-column: 8 / 13;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  &__text {
    line-height: 25px;
  }
}

.img-scene {
  grid-column: 6 span;
  position: relative;

  &__air {
    position: relative;
    z-index: 2;
  }

  &__big-circle,
  &__small-circle {
    z-index: 1;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }

  &__big-circle {
    width: 421px;
    height: 421px;
    background-color: rgba(35, 54, 79, 0.6);
  }

  &__small-circle {
    width: 312px;
    height: 312px;
    background-color: rgba(69, 92, 125, 0.3);
  }
}
</style>
