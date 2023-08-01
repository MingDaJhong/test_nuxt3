<template>
    <div>
        {{ data }}
        <button @click="logout">Log out</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const data = ref({})

const logout = () => {
    userStore.logout()

    // page to index
    const router = useRouter()
    router.push('/')
}

onMounted(() => {
    data.value = userStore
})

</script>