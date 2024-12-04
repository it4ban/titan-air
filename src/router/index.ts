import { createWebHistory, createRouter } from 'vue-router'

import HomeVue from '@/pages/HomeVue.vue'
import ServiceVue from '@/pages/ServiceVue.vue'
import ContactsVue from '@/pages/ContactsVue.vue'
import AboutVue from '@/pages/AboutVue.vue'

import { RoutePathsEnum } from './router.types'
import { AppLayoutsEnum } from '@/layouts/layouts.types'
import { loadLayoutMiddleware } from './loadLayout.middleware'
import NewsVue from '@/pages/NewsVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: `/`,
      name: RoutePathsEnum.home,
      component: HomeVue,
      meta: {
        layout: AppLayoutsEnum.home,
      },
    },
    {
      path: `/service`,
      name: RoutePathsEnum.service,
      component: ServiceVue,
      meta: {
        layout: AppLayoutsEnum.default,
      },
    },
    {
      path: `/contacts`,
      name: RoutePathsEnum.contacts,
      component: ContactsVue,
      meta: {
        layout: AppLayoutsEnum.default,
      },
    },
    {
      path: `/about_us`,
      name: RoutePathsEnum.aboutUs,
      component: AboutVue,
      meta: {
        layout: AppLayoutsEnum.default,
      },
    },
    {
      path: '/news',
      name: RoutePathsEnum.news,
      component: NewsVue,
      meta: {
        layout: AppLayoutsEnum.default,
      },
    },
  ],
})

router.beforeEach(loadLayoutMiddleware)

export default router
