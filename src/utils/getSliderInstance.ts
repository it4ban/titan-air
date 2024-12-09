import type { SwiperContainer } from 'swiper/element'

export const getSwiperInstance = (sliderContainer: SwiperContainer | null) => {
  const sliderInstance = sliderContainer?.swiper

  if (!sliderContainer) {
    throw new Error('Instance not found')
  } else {
    return sliderInstance
  }
}
