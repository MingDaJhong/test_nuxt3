<template>
    <div>
        <client-only>
            {{ t('hello', {name: userName}) }}
            <button
                class="w-[80%] h-[60px] rounded bg-primary1-400 text-gray-100 text-xl
                font-medium hover:shadow-xl active:bg-primary1-600"
                @click="logout"
            >
                Log out
            </button>
            <button
                class="w-[80%] h-[60px] rounded bg-primary1-400 text-gray-100 text-xl
                font-medium hover:shadow-xl active:bg-primary1-600"
                @click="changeUserName"
            >
                Change user name
            </button>
        </client-only>
    </div>
</template>

<script setup>
// import { watch, ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useI18n } from "vue-i18n"

// i18n
const { t } = useI18n();

// store
const userStore = useUserStore()

const { userName } = storeToRefs(userStore)

const changeUserName = () => {
    userStore.changeUserName()
}

const logout = () => {
    userStore.logout()

    // page to index
    const router = useRouter()
    router.push('/')
}

</script>