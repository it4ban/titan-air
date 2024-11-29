export enum AppLayoutsEnum {
  default = 'default',
  home = 'home',
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'AppLayoutDefault.vue',
  home: 'AppLayoutHome.vue',
}
