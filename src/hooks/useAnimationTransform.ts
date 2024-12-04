import { ref } from 'vue'
import gsap from 'gsap'

const offsetX = ref(0)
const offsetY = ref(0)

export const useAnimationTransform = (container: HTMLElement | null) => {
  if (!container || container == null) throw new Error('Container not found')

  const playAnimation = (event: MouseEvent) => {
    const bounds = container.getBoundingClientRect()

    offsetX.value = (event.clientX - bounds.left - bounds.width / 2) / bounds.width
    offsetY.value = (event.clientY - bounds.top - bounds.height / 2) / bounds.height

    gsap.to('.img-scene__image img', {
      x: offsetX.value * 15,
      y: offsetY.value * 15,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  return { playAnimation }
}
