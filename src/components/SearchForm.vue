<template>
  <form class="search-form">
    <div class="search-form__input">
      <input type="text" placeholder="You text..." class="text-field" />

      <button class="search-button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6084 13.7175L12.1325 10.2416C12.114 10.2232 12.0923 10.2103 12.073 10.1931C12.757 9.15558 13.1561 7.91368 13.1561 6.57813C13.1561 2.94511 10.211 0 6.57807 0C2.94511 0 0 2.94511 0 6.57807C0 10.211 2.94505 13.1561 6.578 13.1561C7.91361 13.1561 9.15545 12.757 10.1929 12.073C10.2101 12.0923 10.223 12.1139 10.2415 12.1324L13.7174 15.6084C14.2396 16.1305 15.0861 16.1305 15.6084 15.6084C16.1305 15.0862 16.1305 14.2396 15.6084 13.7175ZM6.57807 10.8757C4.20446 10.8757 2.28035 8.95161 2.28035 6.57807C2.28035 4.20446 4.20453 2.28035 6.57807 2.28035C8.95155 2.28035 10.8757 4.20453 10.8757 6.57807C10.8757 8.95161 8.95155 10.8757 6.57807 10.8757Z"
            fill="#1D2D42"
          />
        </svg>
      </button>
    </div>

    <span class="count-founds">we found <span class="count-founds__result">23</span> results</span>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.search-form {
  display: flex;
  flex-direction: column;
  gap: 29px;

  @media (max-width: 480px) {
    gap: 15px;
  }

  &__input {
    position: relative;
  }
}

.text-field {
  width: 100%;
  border: 1px solid vars.$blue;
  height: 50px;
  border-radius: 30px;
  padding: 0 67px 0 24px;
  color: vars.$blue;

  &::placeholder {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 156%;
    color: #b3b3b3;
  }
}

.search-button {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.count-founds {
  text-align: center;
  font-weight: 900;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: vars.$blue;

  &__result {
    color: vars.$yellow;
  }
}
</style>
