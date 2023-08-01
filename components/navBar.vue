<template>
  <div>
    <ul
      class="w-full h-24 bg-primary1-200 flex gap-20 items-center justify-end pr-[5%]"
    >
      <li
        v-for="item in NAV_ENUM"
        class="text-gray-700 text-base cursor-pointer font-bold"
      >
        <NuxtLink :to="item.to">
          {{ item.name }}
        </NuxtLink>
      </li>
      <li v-if="showLogin">
        <NuxtLink to='login'>
            Log In
        </NuxtLink>
      </li>
      <li v-else>
        <NuxtLink to='user'>
            User
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()

const showLogin = ref(true)

const { userName } = storeToRefs(userStore)

watch(userName, newVal => {
  if (newVal) {
    showLogin.value = false
  } else {
    showLogin.value = true
  }
})

const NAV_ENUM = Object.freeze({
  INDEX: {
    name: 'index',
    to: '/'
  }
})

onMounted(() => {
  // check
  if (userStore.userName) {
    showLogin.value = false
  }
})

</script>
