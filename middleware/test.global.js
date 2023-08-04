import { useUserStore } from "@/stores/user"

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()

  // console.log(userStore.userName, 'test')
  // const userInfo = localStorage.getItem('userInfo')

  if (!userStore.userName && to.name === 'user') {
    useRouter().push('/error')
  }

})