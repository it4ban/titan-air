import './assets/scss/main.scss'

import { YANDEX_API_KEY } from '@/constants'
import { routes } from './routes'

import { createApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'

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
