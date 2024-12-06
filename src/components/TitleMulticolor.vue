<template>
  <p
    :class="[
      'title-multicolor',
      mainColor === 'blue' ? 'title-multicolor--blue' : 'title-multicolor--yellow',
    ]"
  >
    <span
      :class="[
        'title-multicolor__accent',
        titleColor === 'blue'
          ? 'title-multicolor__accent--blue'
          : 'title-multicolor__accent--yellow',
      ]"
      >{{ title.split(' ')[0] }}</span
    >
    {{ title.split(' ').slice(1).join(' ') }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  mainColor: 'blue' | 'yellow'
  titleColor: 'blue' | 'yellow'
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';

.title-multicolor {
  font-weight: 900;
  font-size: 36px;
  text-transform: uppercase;

  @media (max-width: 520px) {
    font-size: 24px;
  }

  @media (max-width: 398px) {
    font-size: 18px;
  }

  &--blue {
    color: vars.$blue;
  }

  &--yellow {
    color: vars.$yellow;
  }

  &__accent {
    &--blue {
      color: vars.$blue;
    }

    &--yellow {
      color: vars.$yellow;
    }
  }
}
</style>
