import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

export const useBreakpoints = () => {
  const { width, height } = useWindowSize()

  const screenWidth = ref(computed(() => width.value))
  const screenHeight = ref(computed(() => height.value))

  return { screenWidth, screenHeight }
}
