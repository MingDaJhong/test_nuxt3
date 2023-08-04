<template>
  <div>
    <NavBar />
    <div class="body-container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/navBar.vue'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()

const { $setResizeListener, $removeResizeListener } = useNuxtApp()

onMounted(async () => {
  await userStore.callApiTest()

  $setResizeListener()
})
onUnmounted(() => {
  $removeResizeListener()
})

</script>

<style lang="scss">
.body-container {
  position: absolute;
  top: 60px;
  width: 100%;
  height: calc(100% - 60px);
  overflow: auto;
}
</style>
