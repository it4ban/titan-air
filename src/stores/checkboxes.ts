import { defineStore } from 'pinia'

interface ICheckbox {
  state: boolean
  value: string
}

export const useCheckboxesStore = defineStore('checkboxesStore', {
  state: () => {
    return {
      groudModalCheckboxes: [] as ICheckbox[],
      airModalCheckboxes: [] as ICheckbox[],
    }
  },
  actions: {
    groundActiveCheckboxes(checkbox: ICheckbox) {
      this.groudModalCheckboxes.push(checkbox)
    },
    airModalCheckboxes(checkbox: ICheckbox) {
      this.airModalCheckboxes.push(checkbox)
    },
  },
})
