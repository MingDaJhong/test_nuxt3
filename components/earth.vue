<template>
  <div class="container">
    <div class="planet">
      <div class="ball1" />
      <div class="ball2" />
    </div>
  </div>
</template>

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
  border: 2px solid #001000;
  transform-style: preserve-3d;
  width: 200px;
  height: 200px;
  transform: scaleY(0.5) rotateZ(45deg);
  border-radius: 50%;
  animation: planet-rotate 5s linear infinite;
}

.ball1 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: yellowgreen;
  position: absolute;
  left: calc(50% - 25px);
  top: -25px;
  transform: rotateZ(45deg);
  transform: rotateZ(-45deg) scaleY(2);
  animation: self-rotate 5s linear infinite;
}
.ball2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: calc(50% - 25px);
  bottom: -25px;
  transform: rotateZ(45deg);
  transform: rotateZ(-45deg) scaleY(2);
  animation: test 5s linear infinite;
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
  }
  100% {
    transform: rotate(-360deg) scaleY(2) rotate(-45deg);
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
