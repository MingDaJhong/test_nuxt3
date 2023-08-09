<template>
  <div class="w-full h-full">
    index
    <loading />
    <div class="absolute top-50 left-100">
      <switch-vue
        :width="'100'"
        :height="'50'"
      />
    </div>
    <div class="flex gap-20 items-center mt-80 ml-80">
      <div class="w-80 h-80 cube1 flex items-center justify-center text-xl">
        1
      </div>
      <div class="w-80 h-80 cube2 flex items-center justify-center text-xl">
        2
      </div>
      <div class="w-80 h-80 cube3 flex items-center justify-center text-xl">
        3
      </div>
      <div class="w-80 h-80 cube4 flex items-center justify-center text-xl">
        4
      </div>
    </div>
  </div>
</template>

<script setup>
import switchVue from '@/components/switch.vue'
import loading from '@/components/loading.vue'
</script>

<style scoped>
.cube1 {
  background-color: rgba(222, 223, 223, 1);
}
.cube2 {
  background-color: rgba(72, 208, 208, 1);
}
.cube3 {
  background-color: rgba(236, 161, 255, 1);
}
.cube4 {
  background-color: rgba(244, 118, 118, 1);
}
</style>
