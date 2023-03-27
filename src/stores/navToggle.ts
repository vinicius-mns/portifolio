import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNav = defineStore('navContainer', () => {
  const visible = ref(true)

  const toggleVisible = () => visible.value = !visible.value

  return { visible, toggleVisible }
})
