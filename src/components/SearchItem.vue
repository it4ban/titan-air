<template>
  <div class="search-item">
    <div class="search-item__wrapper">
      <div class="underline"></div>

      <div class="search-content">
        <span class="search-content__title">{{ title }}</span>
        <p class="search-content__text">
          {{ text }}
        </p>
      </div>

      <div class="underline"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';

.search-item {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 31px;

    @media (max-width: 520px) {
      gap: 18px;
    }
  }
}

.search-content {
  display: flex;
  flex-direction: column;
  gap: 33px;

  @media (max-width: 620px) {
    gap: 20px;
  }

  &__title {
    font-weight: 900;
    font-size: 24px;
    color: vars.$blue;
  }

  &__text {
    font-weight: 400;
    line-height: 156%;
  }
}
</style>
