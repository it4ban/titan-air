import type { Ref } from 'vue'
import { ref, computed } from 'vue'
import { useMouse } from '@vueuse/core'

interface IUseAnimationWidth {
  elements: [Ref<HTMLElement | null>, Ref<HTMLElement | null>]
  fOneWidth: number
  fTwoWidth: number
}

export const useAnimationWidth = (props: IUseAnimationWidth) => {
  const { x } = useMouse()

  const { elements, fOneWidth, fTwoWidth } = props

  const figureOneWidth = ref(0)
  const figureTwoWidth = ref(0)

  const currentMouseX = ref(computed(() => x.value))
  const prevMouseX = ref(x.value)

  const mouseMove = () => {
    if (prevMouseX.value <= currentMouseX.value) {
      figureOneWidth.value = Math.min(fOneWidth + 10, fOneWidth)
      figureTwoWidth.value = Math.min(fTwoWidth + 10, fTwoWidth)
    } else {
      figureOneWidth.value = Math.max(fOneWidth - 10, fOneWidth - 2)
      figureTwoWidth.value = Math.max(fTwoWidth - 10, fTwoWidth - 2)
    }

    prevMouseX.value = currentMouseX.value

    elements[0].value!.style.width = `${figureOneWidth.value}%`
    elements[1].value!.style.width = `${figureTwoWidth.value}%`
  }

  return { mouseMove }
}
