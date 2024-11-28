<template>
  <main class="home">
    <div>HOME PAGE</div>

    <ul>
      <li>
        <RouterLink :to="`${BASE_URL}/`">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="`${BASE_URL}/service`">Services</RouterLink>
      </li>
      <li>
        <RouterLink :to="`${BASE_URL}/contacts`">Contacts</RouterLink>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { BASE_URL } from '@/constants'
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  justify-content: center;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
  }
}
</style>
