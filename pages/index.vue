<template>
  <div>
    index
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

onMounted(async () => {
  await userStore.fetchTodos()
})
</script>
