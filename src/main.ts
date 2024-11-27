import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'

import ServiceVue from './pages/ServiceVue.vue'
import ContactsVue from './pages/ContactsVue.vue'

import App from './App.vue'

const routes = [
  { path: '/service', component: ServiceVue },
  { path: '/contacts', component: ContactsVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
