import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: '',
    userID: '',
    userLevel: ''
  }),
  actions: {
    init () {
      const userInfo = localStorage.getItem('userInfo')

      if (userInfo && !this.userName) {
        const parsedData = JSON.parse(userInfo)

        Object.keys(parsedData).forEach(key => {
          this[key] = parsedData[key]
        })
      }
    },
    async login () {
      const response = await $fetch('https://jsonplaceholder.typicode.com/todos/1')

      useNuxtApp().$apiHandle(response)

      const returnPayload = {
        result: false,
        errorCode: ''
      }

      if (response) {
        returnPayload.result = true

        this.userName = 'Darren'
        this.userID = 'test ID'
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
    logout () {
      localStorage.removeItem('userInfo')

      this.userName = ''
      this.userID = ''
      this.userLevel = ''
    },
    async callApiTest () {
      console.log('call api')
      const response = await $fetch('https://apitest2-rr7tb4kqva-uc.a.run.app', {
        method: 'GET'
      })

      console.log('🚀 ~ file: user.js:62 ~ callApiTest ~ response:', response)
    },
    async changeUserName (name) {
      const response = await $fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: {
          userName: name
        }
      })

      if (response.result) {
        this.userName = name

        const userInfo = JSON.parse(localStorage.getItem('userInfo'))

        userInfo.userName = name

        localStorage.setItem('userInfo', JSON.stringify(userInfo))
      } else {
        console.error('hay man your request is not valid')
      }
    },
    /**
     * @param {String} accessToken google client accessToken
     */
    async googleLogin (accessToken) {
      const responsePayload = {
        errorMessage: '',
        result: false
      }

      if (!accessToken) {
        responsePayload.errorMessage = 'Please check your Google accessToken'
        return responsePayload
      }

      console.log('call api auth google')

      const response = await $fetch('/api/auth/google', {
        method: 'POST',
        body: {
          accessToken
        }
      })

      console.log('after api auth google', response)

      console.log(response?.data?.userInfo, 'user info in user js')
      if (response?.data?.userInfo) {
        const response = await this.login()

        if (response.result) {
          responsePayload.result = true
        }
      } else {
        responsePayload.errorMessage = response
      }

      console.log(response)
      return responsePayload
    }
  }
})
