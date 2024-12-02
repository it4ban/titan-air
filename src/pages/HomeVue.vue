<template>
  <main class="home">
    <section class="one-screen">
      <div ref="figureOne" class="one-screen__figure-1"></div>
      <div ref="figureTwo" class="one-screen__figure-2"></div>

      <div class="container">
        <div class="one-screen__wrapper">
          <div class="one-screen__block">
            <div class="screen-title">
              <span class="screen-title__header"><span>best</span> partner for you </span>
              <div class="screen-title__underline"></div>
            </div>

            <div class="one-screen__bottom">
              <p class="screen-text one-screen__text">
                Titan AirService specializes in aviation and marine support services for executive,
                government and commercial companys.
              </p>

              <ButtonItem :variant="'outline-yellow'"> Show more </ButtonItem>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-screen">
      <ul>
        <li>
          <RouterLink :to="`/`">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="`/service`">Services</RouterLink>
        </li>
        <li>
          <RouterLink :to="`/contacts`">Contacts</RouterLink>
        </li>
        <li>
          <RouterLink :to="`/about_us`">About US</RouterLink>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useAnimationWidth } from '@/hooks'
import ButtonItem from '@/components/ButtonItem.vue'

const figureOne = ref<HTMLElement | null>(null)
const figureTwo = ref<HTMLElement | null>(null)

const { mouseMove } = useAnimationWidth({
  elements: [figureOne, figureTwo],
  fOneWidth: 70,
  fTwoWidth: 80,
})

const inMove = ref(false)
const inMoveDelay = ref(400)
const activeSection = ref(0)
const offsets = ref<number[]>([])
const touchStartY = ref(0)

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

onMounted(() => {
  window.addEventListener('mousemove', mouseMove)

  handleCalculateSectionOffset()
  window.addEventListener('wheel', handleMouseWheel)
  window.addEventListener('touchstart', handleTouchStart)
  window.addEventListener('touchmove', handleTouchMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', mouseMove)

  window.removeEventListener('wheel', handleMouseWheel)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';
@use '@/assets/scss/mixins';

.home {
  width: 100%;
  overflow: hidden;

  ul {
    display: flex;
    align-items: center;
    justify-self: center;
    gap: 20px;
  }
}

.one-screen,
.two-screen {
  height: 100vh;
}

.one-screen {
  background-image: url('@/assets/img/home/main-bg-1.jpg');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  position: relative;

  @include mixins.retina-bg {
    background-image: url('@/assets/img/home/main-bg-1@2x.jpg');
  }

  &::before {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(38, 53, 75, 0.8);

    @media (max-width: 590px) {
      display: block;
    }
  }

  &__figure-1 {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('@/assets/img/home/figure-1.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100% 105%;
    width: 70%;
    height: 100%;
    z-index: 2;
    transition: all 0.5s ease-in-out;

    @include mixins.retina-bg {
      background-image: url('@/assets/img/home/figure-1@2x.png');
    }

    @media (max-width: 590px) {
      display: none;
    }
  }

  &__figure-2 {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('@/assets/img/home/substract.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100% 105%;
    width: 80%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s ease-in-out;

    @include mixins.retina-bg {
      background-image: url('@/assets/img/home/substract@2x.png');
    }

    @media (max-width: 590px) {
      display: none;
    }
  }

  &__wrapper {
    position: relative;
    z-index: 3;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }

  &__block {
    grid-column: 2 / 6;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    min-height: 600px;

    @media (max-width: 1120px) {
      padding: 0 20px;
      grid-column: 2 / 8;
    }

    @media (max-width: 590px) {
      grid-column: 1 / 12;
      padding: 0;
    }
  }

  &__text {
    font-size: 18px;
    line-height: 139%;
    padding: 22px 0 57px;

    @media (max-width: 590px) {
      font-size: 16px;
      padding: 20px 0 24px;
    }

    @media (max-width: 380px) {
      font-size: 14px;
    }
  }
}

.screen-title {
  &__header {
    @media (max-width: 1120px) {
      font-size: 22px;
    }
  }
}
</style>
