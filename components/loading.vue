<template>
  <div class="loader" />
</template>

<style scoped>
.loader {
  margin: auto;
  border: 5px solid #EAF0F6;
  border-radius: 50%;
  border-top: 5px solid #FF7A59;
  width: 50px;
  height: 50px;
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(180deg); }
  50% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
}
</style>
