import { useUserStore } from "@/stores/user"

export default defineNuxtRouteMiddleware(() => {
    const userStore = useUserStore()

    userStore.init()
  })