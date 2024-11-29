import type { RouteLocationNormalized } from 'vue-router'
import { AppLayoutsEnum, AppLayoutToFileMap } from '@/layouts/layouts.types'

export const loadLayoutMiddleware = async (route: RouteLocationNormalized): Promise<void> => {
  const { layout } = route.meta
  const normalizeLayoutName = layout || AppLayoutsEnum.default
  const fileName = AppLayoutToFileMap[normalizeLayoutName]
  const fileNameWithoutExtension = fileName.split('.vue')[0]

  const component = await import(`@/layouts/${fileNameWithoutExtension}.vue`)
  route.meta.layoutComponent = component.default
}
