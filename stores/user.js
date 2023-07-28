import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: 'Darren Test',
    userID: '12345',
    userLevel: 1
  }),
  actions: {
    showURL () {
      const BASE_URL = useRuntimeConfig().public.BASE_API
      console.log('BASE_URL HERE:', BASE_URL)
    },
    async upgrade () {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 500)
      })

      this.userLevel = this.userLevel + 1
    },
    async fetchTodos () {
      const response = await useFetch('https://jsonplaceholder.typicode.com/todos')

      console.log(response)
    }
  }
})