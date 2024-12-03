import { ref } from 'vue'

const inMove = ref(false)
const inMoveDelay = ref(400)
const activeSection = ref(0)
const offsets = ref<number[]>([])
const touchStartY = ref(0)

const moveDown = () => {
  inMove.value = !inMove.value
  activeSection.value--

  if (activeSection.value < 0) activeSection.value = offsets.value.length - 1

  scrollToSection(activeSection.value, true)
}

const moveUp = () => {
  inMove.value = true
  activeSection.value++

  if (activeSection.value > offsets.value.length - 1) activeSection.value = 0

  scrollToSection(activeSection.value, true)
}

const scrollToSection = (id: number, force: boolean = false) => {
  if (inMove.value && !force) return false

  activeSection.value = id
  inMove.value = true

  const section = document.querySelectorAll('section')[id]
  section?.scrollIntoView({ behavior: 'smooth' })

  setTimeout(() => {
    inMove.value = false
  }, inMoveDelay.value)
}

export const useScreenScroll = () => {
  const handleCalculateSectionOffset = () => {
    const sections = document.querySelectorAll('section')

    sections.forEach((section) => {
      const sectionOffset = section.offsetTop
      offsets.value.push(sectionOffset)
    })
  }

  const handleMouseWheel = (e: WheelEvent) => {
    if (e.deltaY < 15 && !inMove.value) {
      moveUp()
    } else if (e.deltaY > 15 && !inMove.value) {
      moveDown()
    }
  }

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.value = e.touches[0].clientY
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (inMove.value) return false

    const currentY = e.touches[0].clientY

    if (touchStartY.value < currentY) {
      moveDown()
    } else {
      moveUp()
    }

    touchStartY.value = 0
    return false
  }

  return {
    activeSection,
    handleCalculateSectionOffset,
    handleMouseWheel,
    handleTouchStart,
    handleTouchMove,
  }
}
