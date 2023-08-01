<template>
  <div>
    <NavBar />
    <div class="body-container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/navBar.vue'

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
