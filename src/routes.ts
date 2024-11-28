import { BASE_URL } from './constants'

import HomeVue from './pages/HomeVue.vue'
import ServiceVue from './pages/ServiceVue.vue'
import ContactsVue from './pages/ContactsVue.vue'
import AboutVue from './pages/AboutVue.vue'

export const routes = [
  { path: `${BASE_URL}/`, component: HomeVue },
  { path: `${BASE_URL}/service`, component: ServiceVue },
  { path: `${BASE_URL}/contacts`, component: ContactsVue },
  { path: `${BASE_URL}/about_us`, component: AboutVue },
]
