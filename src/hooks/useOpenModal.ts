import { reactive } from 'vue'

const popupRegistry = reactive(new Map())

export const useOpenModal = () => {
  return {
    register(id, instance) {
      popupRegistry.set(id, instance)
    },
  }
}
