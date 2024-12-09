import { defineStore } from 'pinia'

export const useMainSliderStore = defineStore('mainSliderStore', {
  state: () => {
    return {
      fullscreenEnabled: false,
      activeSlide: 0,
    }
  },
  actions: {
    toggleFullscreen(state: boolean) {
      this.fullscreenEnabled = state
    },
    changeIndexSlide(index: number) {
      this.activeSlide = index
    },
  },
})
