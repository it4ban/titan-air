import './assets/scss/main.scss'

import { BASE_URL, YANDEX_API_KEY } from '@/constants'

import { createApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'

import HomeVue from './pages/HomeVue.vue'
import ServiceVue from './pages/ServiceVue.vue'
import ContactsVue from './pages/ContactsVue.vue'

import App from './App.vue'

const routes = [
  { path: `${BASE_URL}/`, component: HomeVue },
  { path: `${BASE_URL}/service`, component: ServiceVue },
  { path: `${BASE_URL}/contacts`, component: ContactsVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const yamap = createYmaps({
  apikey: YANDEX_API_KEY,
  lang: 'en_EN',
})

const pinia = createPinia()

const app = createApp(App)

app.use(yamap)
app.use(pinia)
app.use(router)

app.mount('#app')
