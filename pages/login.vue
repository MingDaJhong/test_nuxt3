<template>
  <div class="w-full h-full flex items-center justify-center">
    <!-- Card -->
    <div class="bg-primary1-100 border border-[1px] border-gray-500 rounded w-[500px] h-[650px] pt-[120px]
      px-[50px] flex flex-col items-center justify-between shadow-2xl" :style="paddingBottom">
      <!-- Input Group -->
      <div class="flex flex-col gap-12 w-full">
        <baseInput v-model="userAccount" :placeholder="'Account'" :warning-text="emailWarning"
          @userEnter="handleUserClick" />
        <baseInput v-model="userPassword" :placeholder="'Password'" :type="'password'" :warning-text="passwordWarning"
          @userEnter="handleUserClick" />
        <baseInput v-if="showSignUp" v-model="userConfirmPassword" :placeholder="'Confirm Password'" :type="'password'"
          :warning-text="confirmWarning" @userEnter="handleUserClick" />
      </div>
      <!-- End Input Group -->
      <!-- Button Group -->
      <div class="w-full h-[150px] flex flex-col items-center gap-8">
        <button class="w-[80%] h-[60px] rounded bg-primary1-400 text-gray-100 text-xl
          font-medium hover:shadow-xl active:bg-primary1-600" @click="handleUserClick">
          {{ buttonText }}
        </button>
        <div class="cursor-pointer underline text-gray-600" @click="toggleSignUp">
          {{ signUpText }}
        </div>
      </div>
      <!-- End Button Group -->
    </div>
    <!-- End Card -->
  </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import baseInput from '@/components/baseInput.vue'
import { useUserStore } from '@/stores/user.js'

// stores
const userStore = useUserStore()

const userAccount = ref('')
const userPassword = ref('')
const userConfirmPassword = ref('')

const emailWarning = ref('')
const passwordWarning = ref('')
const confirmWarning = ref('')

const showSignUp = ref(false)

const paddingBottom = computed(() => {
  if (showSignUp.value) {
    return 'padding-bottom: 60px;'
  }
  return 'padding-bottom: 100px;'
})

const buttonText = computed(() => {
  if (showSignUp.value) {
    return 'Sign Up'
  }
  return 'Log In'
})

const signUpText = computed(() => {
  if (showSignUp.value) {
    return 'Back To Log In'
  }
  return 'Sign Up Now ...'
})

watch(showSignUp, () => {
  resetAllInput()
})

watch(userAccount, (newVal) => {
  // if user typing new word, clear warning text
  if (newVal && emailWarning.value) {
    emailWarning.value = ''
  }
})

watch(userPassword, (newVal) => {
  // if user typing new word, clear warning text
  if (newVal && passwordWarning.value) {
    passwordWarning.value = ''
  }
})

watch(userConfirmPassword, (newVal) => {
  // if user typing new word, clear warning text
  if (newVal && confirmWarning.value) {
    confirmWarning.value = ''
  }
})

const toggleSignUp = () => {
  showSignUp.value = !showSignUp.value
}

const handleUserClick = async () => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const passwordRegex = /^[a-zA-Z0-9]+$/

  // check email and password in valid
  if (!emailRegex.test(userAccount.value)) {
    emailWarning.value = 'invalid Email !!!!'
    return
  } else if (!passwordRegex.test(userPassword.value)) {
    passwordWarning.value = 'Invalid Password !!!!'
    return
  }

  if (showSignUp.value) {
    if (!passwordRegex.test(userConfirmPassword.value)) {
      confirmWarning.value = 'Invalid Confirm Password !!!!'
      return
    } else if (userPassword.value !== userConfirmPassword.value) {
      confirmWarning.value = 'Please check your confirm password !!!!'
      return
    } else {
      console.log('call sign up api')
    }
  } else {
    await login()
  }
}

const login = async () => {
  const response = await userStore.login()

  if (response.result) {
    const router = useRouter()
    router.push('/user')
  }
}

const resetAllInput = () => {
  userAccount.value = ''
  userPassword.value = ''
  userConfirmPassword.value = ''
  passwordWarning.value = ''
}

onBeforeUnmount(() => {
  resetAllInput()
})

</script>
