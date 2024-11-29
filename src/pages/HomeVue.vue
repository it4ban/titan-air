<template>
  <main class="home">
    <div>HOME PAGE</div>

    <ul>
      <li>
        <RouterLink :to="`/`">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="`/service`">Services</RouterLink>
      </li>
      <li>
        <RouterLink :to="`/contacts`">Contacts</RouterLink>
      </li>
      <li>
        <RouterLink :to="`/about_us`">About US</RouterLink>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
