import { useUserStore } from '@/stores/user'

export default defineNuxtPlugin(() => {
  const userStore = useUserStore()

  // use nextTick to make sure web page is in client side already
  nextTick(() => {
    userStore.init()
  })
})
