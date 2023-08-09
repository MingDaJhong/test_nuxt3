<template>
  <div class="container">
    <div class="planet">
      <div class="ball1">
        <rotatingCube />
      </div>
      <div class="ball2">
        <rotatingCube />
      </div>
    </div>
  </div>
</template>

<script setup>
import rotatingCube from '@/components/rotatingCube.vue'
</script>

<style scoped>
.container {
  position: absolute;
  top: 300px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.planet {
  position: absolute;
  /* border: 2px solid #001000; */
  transform-style: preserve-3d;
  width: 1000px;
  height: 1000px;
  transform: scaleY(0.5) rotateZ(45deg);
  border-radius: 50%;
  animation: planet-rotate 10s linear infinite;
}

.ball1 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  /* background-color: yellowgreen; */
  position: absolute;
  left: calc(50% - 150px);
  top: -150px;
  transform: rotateZ(-45deg) scaleY(2);
  animation: self-rotate 10s linear infinite;
}
.ball2 {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  right: calc(50% - 100px);
  bottom: -100px;
  transform: rotateZ(-45deg) scaleY(2);
  animation: test 10s linear infinite;
}

@keyframes planet-rotate {
  0% {
    transform:  rotate(45deg) scaleY(0.5) rotate(0);
  }
  100% {
    transform:  rotate(45deg) scaleY(0.5) rotate(360deg);
  }
}

@keyframes self-rotate {
  0% {
    transform: rotate(0) scaleY(2) rotate(-45deg);
    width: 100px;
    height: 100px;
    left: calc(50% - 50px);
    top: -50px;
  }
  25% {
    width: 200px;
    height: 200px;
    left: calc(50% - 100px);
    top: -100px;
  }
  50% {
    width: 300px;
    height: 300px;
    left: calc(50% - 150px);
    top: -150px;
  }
  75% {
    width: 200px;
    height: 200px;
    left: calc(50% - 100px);
    top: -100px;
  }
  100% {
    transform: rotate(-360deg) scaleY(2) rotate(-45deg);
    width: 100px;
    height: 100px;
    left: calc(50% - 50px);
    top: -50px;
  }
}

@keyframes test {
  0% {
    transform: rotate(0) scaleY(2) rotate(-90deg);
  }
  100% {
    transform: rotate(-360deg) scaleY(2) rotate(-90deg);
  }
}
</style>
