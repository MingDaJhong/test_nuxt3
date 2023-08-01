import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: '',
    userID: '',
    userLevel: ''
  }),
  actions: {
    async init () {
      const userInfo = localStorage.getItem('userInfo')

      if (userInfo && !this.userName) {
        console.log('set store data')
        const parsedData = JSON.parse(userInfo)

        Object.keys(parsedData).forEach(key => {
          this[key] = parsedData[key]
        })
      }
    },
    async login () {
      const response = await $fetch('https://jsonplaceholder.typicode.com/todos/1')

      let returnPayload = {
        result: false,
        errorCode: ''
      }

      if (response) {
        returnPayload.result = true

        this.userName = 'Darren'
        this.userID = 'test ID',
        this.userLevel = 'Admin'

        const payload = {
          userName: 'Darren',
          userID: 'test ID',
          userLevel: 'Admin'
        }

        localStorage.setItem('userInfo', JSON.stringify(payload))
      }

      return returnPayload
    },
    async logout () {
      localStorage.removeItem('userInfo')

      this.userName = ''
      this.userID = ''
      this.userLevel = ''
    }
  }
})