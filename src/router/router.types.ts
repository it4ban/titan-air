import type { AppLayoutsEnum } from '@/layouts/layouts.types'
import type { VueElement } from 'vue'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum
    layoutComponent?: VueElement
  }
}

export enum RoutePathsEnum {
  home = 'home',
  service = 'service',
  contacts = 'contacts',
  aboutUs = 'aboutUs',
  news = 'news',
  search = 'search',
}
