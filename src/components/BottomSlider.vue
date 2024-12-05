<template>
  <div class="slider-title">
    <div class="container">
      <div class="slider-title__wrapper">
        <p class="slider-title__text">
          <span>{{ sliderTitle.split(' ')[0] }}</span>
          {{ sliderTitle.split(' ').slice(1).join(' ') }}
        </p>
      </div>
    </div>
  </div>

  <div class="slider">
    <div class="slider__wrapper">
      <div class="navigation-left">
        <svg
          width="20"
          height="31"
          viewBox="0 0 20 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.843191 14.2904L15.673 0.49524C16.016 0.175917 16.4738 0 16.962 0C17.4502 0 17.9081 0.175917 18.2511 0.49524L19.3432 1.51092C20.0539 2.17276 20.0539 3.24842 19.3432 3.90925L6.8903 15.4936L19.357 27.0908C19.7 27.4101 19.8894 27.8358 19.8894 28.2897C19.8894 28.7441 19.7 29.1698 19.357 29.4894L18.2649 30.5048C17.9217 30.8241 17.4641 31 16.9758 31C16.4876 31 16.0298 30.8241 15.6868 30.5048L0.843191 16.697C0.499384 16.3767 0.310547 15.949 0.31163 15.4943C0.310547 15.0379 0.499384 14.6105 0.843191 14.2904Z"
            fill="white"
          />
        </svg>
      </div>

      <swiper-container
        :loop="true"
        :slides-per-view="2"
        :centered-slides="false"
        :space-between="0"
        :initial-slide="1"
        :navigation-next-el="'.navigation-right'"
        :navigation-prev-el="'.navigation-left'"
        :breakpoints="{
          998: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }"
      >
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-item__wrapper">
              <span class="slider-item__header">Headline 1 Lorem ipsum dolor sit amet ...</span>
              <span class="slider-item__date">11.03.2020</span>
              <p class="slider-item__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea ...
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-item__wrapper">
              <span class="slider-item__header">Headline 2 Lorem ipsum dolor sit amet ...</span>
              <span class="slider-item__date">11.03.2020</span>
              <p class="slider-item__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea ...
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-item__wrapper">
              <span class="slider-item__header">Headline 3 Lorem ipsum dolor sit amet ...</span>
              <span class="slider-item__date">11.03.2020</span>
              <p class="slider-item__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea ...
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-item__wrapper">
              <span class="slider-item__header">Headline 4 Lorem ipsum dolor sit amet ...</span>
              <span class="slider-item__date">11.03.2020</span>
              <p class="slider-item__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea ...
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-item__wrapper">
              <span class="slider-item__header">Headline 5 Lorem ipsum dolor sit amet ...</span>
              <span class="slider-item__date">11.03.2020</span>
              <p class="slider-item__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea ...
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-item__wrapper">
              <span class="slider-item__header">Headline 6 Lorem ipsum dolor sit amet ...</span>
              <span class="slider-item__date">11.03.2020</span>
              <p class="slider-item__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea ...
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>

      <div class="navigation-right">
        <svg
          width="20"
          height="31"
          viewBox="0 0 20 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1568 14.2904L4.32704 0.49524C3.98405 0.175917 3.52618 0 3.03797 0C2.54976 0 2.09189 0.175917 1.7489 0.49524L0.656786 1.51092C-0.0538571 2.17276 -0.0538571 3.24842 0.656786 3.90925L13.1097 15.4936L0.642969 27.0908C0.299974 27.4101 0.110596 27.8358 0.110596 28.2897C0.110596 28.7441 0.299974 29.1698 0.642969 29.4894L1.73508 30.5048C2.07834 30.8241 2.53594 31 3.02415 31C3.51236 31 3.97023 30.8241 4.31323 30.5048L19.1568 16.697C19.5006 16.3767 19.6895 15.949 19.6884 15.4943C19.6895 15.0379 19.5006 14.6105 19.1568 14.2904Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import { register } from 'swiper/element'

register()

Swiper.use([Navigation])

defineProps<{
  sliderTitle: string
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.slider-title {
  &__wrapper {
    padding-bottom: 31px;
  }

  &__text {
    font-weight: 900;
    font-size: 36px;
    text-transform: uppercase;
    color: vars.$yellow;

    span {
      color: vars.$blue;
    }
  }
}

.slider {
  width: 100%;
  height: 550px;
  max-width: 100%;
  background-color: vars.$darkBlue;

  &__wrapper {
    padding: 0 150px;
    position: relative;

    @media (max-width: 1220px) {
      padding: 0 90px;
    }

    @media (max-width: 520px) {
      padding: 0 45px;
    }
  }
}

.navigation-left,
.navigation-right {
  position: absolute;
  top: 0;
  height: 100%;
  width: 150px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1220px) {
    width: 90px;
  }

  @media (max-width: 520px) {
    width: 45px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(29, 45, 66, 0) 0%,
      rgba(23, 37, 54, 0.74) 50%,
      #111d2c 100%
    );
  }

  svg {
    z-index: 1;
  }

  svg path {
    transition: all 0.3s ease-in-out;
  }

  @include mixins.hover {
    svg path {
      fill: vars.$yellow;
    }
  }
}

.navigation-left {
  left: 0;
  background-image: url('@/assets/img/nav-left.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  @include mixins.retina-bg {
    background-image: url('@/assets/img/nav-left@2x.jpg');
  }
}

.navigation-right {
  right: 0;
  background-image: url('@/assets/img/nav-right.jpg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;

  @include mixins.retina-bg {
    background-image: url('@/assets/img/nav-right@2x.jpg');
  }
}

.slider-item {
  background-image: url('@/assets/img/news/slider/1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  width: 100%;
  max-width: 100%;
  height: 550px;
  position: relative;

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(29, 45, 66, 0) 0%,
      rgba(23, 37, 54, 0.74) 50%,
      #111d2c 100%
    );
  }

  @include mixins.retina-bg {
    background-image: url('@/assets/img/news/slider/1@2x.jpg');
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: end;
    z-index: 2;
    position: relative;
    padding: 0 43px 38px;

    @media (max-width: 520px) {
      padding: 0 20px 15px;
    }
  }

  &__header {
    font-weight: 900;
    font-size: 24px;
    color: vars.$light;

    @media (max-width: 520px) {
      font-size: 18px;
    }
  }

  &__date {
    font-weight: 400;
    font-size: 12px;
    line-height: 208%;
    color: rgba(255, 255, 255, 0.6);
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 179%;
    color: vars.$light;
  }
}
</style>
