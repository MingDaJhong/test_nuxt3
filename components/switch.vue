<template>
  <div :style="sizeStyle">
    <input id="switch" type="checkbox">
    <label id="label" for="switch" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '200'
  },
  height: {
    type: String,
    default: '100'
  }
})

const sizeStyle = computed(() => `width: ${props.width}px; height: ${props.height}px;`)

onMounted(() => {
  // console.log('switch onMounted')

  // const test = document.getElementById('label') || {}
  // const test = getComputedStyle(label) || {}

  // if (test) {
  //   console.log(test)
  // }
})

</script>

<style lang="scss" scoped>
input[type=checkbox]{
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: #D9D9D9;
  outline: 5px solid rgba(241, 235, 235, 1);
  box-shadow: 10px 10px 11px 0px rgba(0, 0, 0, 0.20) inset;
  border-radius: 100px;
  display: block;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% / 2 - 10px);
  height: calc(100% - 10px);
  background: linear-gradient(136deg, #F1F1F1 0.96%, #FFF 35.11%, rgba(232, 219, 219, 0.00) 100%);
  box-shadow: 7px 0px 17px 0px rgba(0, 0, 0, 0.20);
  border-radius: 50%;
  transition: 0.3s;
}

input:checked + label {
  @apply bg-error
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

</style>
