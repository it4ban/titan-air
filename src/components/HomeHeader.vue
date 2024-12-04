<template>
  <header class="header-home">
    <div class="header-home__wrapper">
      <LogoItem />

      <div class="header-home__right">
        <SearchFormItem :transparent="true" :iconVariant="activeSection > 0 ? 'light' : 'dark'" />

        <ContactsLinkIcon :iconVariant="activeSection > 0 ? 'light' : 'dark'" />

        <LangSwitcherItem :transparent="true" :variant="activeSection > 0 ? 'lighten' : 'darken'" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useScreenScroll } from '@/hooks'
import LogoItem from './LogoItem.vue'
import SearchFormItem from './SearchFormItem.vue'
import ContactsLinkIcon from './ContactsLinkIcon.vue'
import LangSwitcherItem from './LangSwitcherItem.vue'

const { activeSection } = useScreenScroll()
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.header-home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 28px;
    padding-left: 35px;
    padding-right: 41px;
  }

  &__right {
    display: flex;
    gap: 60px;

    svg path {
      fill: vars.$blue;
    }
  }
}
</style>
