<template>
  <div>
    <client-only>
      {{ t('hello', {name: userName}) }}
      <baseInput
        v-model="modifyUserName"
        :placeholder="'Name'"
        @userEnter="changeUserName"
      />
      <button
        class="w-[80%] h-[60px] rounded bg-primary1-400 text-gray-100 text-xl
                font-medium hover:shadow-xl active:bg-primary1-600"
        @click="changeUserName"
      >
        Change user name
      </button>
      <button
        class="w-[120px] h-[60px] rounded bg-primary1-400 text-gray-100 text-xl
                font-medium hover:shadow-xl active:bg-primary1-600 absolute"
        @click="logout"
      >
        Log out
      </button>
    </client-only>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
import baseInput from '@/components/baseInput.vue'

// i18n
const { t } = useI18n()

// store
const userStore = useUserStore()

const { userName } = storeToRefs(userStore)

const modifyUserName = ref('')

const changeUserName = () => {
  userStore.changeUserName(modifyUserName.value)

  modifyUserName.value = ''
}

const logout = () => {
  userStore.logout()

  // page to index
  const router = useRouter()

  router.push('/')
}

</script>
