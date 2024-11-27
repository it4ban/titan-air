import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    modalStates: {
      groundModal: false,
      airModal: false,
    },
  }),
  actions: {
    openModal(modalType: 'groundModal' | 'airModal') {
      this.modalStates[modalType] = true
    },
    closeModal(modalType: 'groundModal' | 'airModal') {
      this.modalStates[modalType] = false
    },
  },
})
