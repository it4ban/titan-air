<script setup lang="ts"></script>

<template>
  <a href="#" class="logo">
    <span class="logo__icon">
      <svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5617 8.73955C13.3989 8.73955 13.2361 8.631 13.2361 8.46818C12.8019 7.1656 10.9565 1.304 10.9565 1.304C10.848 0.92408 11.0108 0.65271 11.3365 0.65271H12.8019C13.1818 0.65271 13.5617 0.92408 13.6702 1.304C13.6702 1.304 16.384 6.46004 17.3066 8.14253C17.3609 8.25108 17.3609 8.4139 17.3066 8.52245C17.2523 8.631 17.1438 8.68527 16.981 8.68527C16.0583 8.73955 14.2673 8.73955 13.5617 8.73955ZM12.9647 25.3474H11.4993C11.1736 25.3474 10.9565 25.076 11.1194 24.6961L14.3758 13.5699C9.21977 13.6785 4.5522 12.9187 2.81543 12.3216C2.54406 12.2131 2.38124 11.996 2.32696 11.7246C1.94704 10.422 0.807288 6.51431 0.807288 6.51431C0.753014 6.40576 0.861562 6.18866 1.07866 6.18866C1.51285 6.18866 1.78422 6.18866 2.32696 6.18866C2.65261 6.18866 2.97825 6.40576 3.14107 6.67713C3.73809 7.59979 4.98639 9.60793 5.36631 10.2049C5.42059 10.3135 5.58341 10.3678 5.69196 10.3678C8.02574 10.3678 27.7272 10.3678 27.7272 10.3678C28.4328 10.422 29.0298 10.9105 29.1926 11.6161C29.3555 12.3216 28.9755 13.0272 28.3243 13.2986C28.0529 13.4071 27.8358 13.5157 27.7272 13.5157H19.3148L13.8873 24.6418C13.7245 25.076 13.3446 25.3474 12.9647 25.3474Z"
          fill="#1D2D42"
        />
      </svg>
    </span>
    <span class="logo__title"><span>Titan Air</span> service</span>
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 398px) {
    justify-content: end;
  }

  &__icon {
    background-color: vars.$yellow;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
  }

  &__title {
    font-family: 'AvenirNext', sans-serif;
    letter-spacing: 3px;
    color: vars.$light;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 464px) {
      font-size: 16px;
      text-align: right;
      width: max-content;
    }

    @media (max-width: 420px) {
      width: auto;
      max-width: 320px;
    }

    span {
      background-color: #455c7d;
    }
  }
}
</style>
