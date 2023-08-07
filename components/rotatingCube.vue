<template>
  <div class="container" :style="cubePosition">
    <div id="cube">
      <div class="front" />
      <div class="back" />
      <div class="right" />
      <div class="left" />
      <div class="top" />
      <div class="bottom" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  top: {
    type: Number,
    default: 0
  },
  left: {
    type: Number,
    default: 0
  }
})

const cubePosition = computed(() => `top: ${props.top}px; left: ${props.left}px;`)

</script>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  position: absolute;
  perspective: 1000px;
}

#cube {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: rotatecube 20s infinite;
}

#cube div {
  width: 200px;
  height: 200px;
  display: block;
  position: absolute;
  border: none;
  line-height: 200px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
}

@keyframes rotatecube {
  0% { transform: rotateX(0deg) rotateY(360deg) rotateZ(90deg); }
  25% { transform: rotateX(90deg) rotateY(270deg) rotateZ(180deg); }
  50% { transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg); }
  75% { transform: rotateX(270deg) rotateY(90deg) rotateZ(360deg); }
  100% { transform: rotateX(360deg) rotateY(0deg) rotateZ(270deg); }
}

.front {
  background: rgba(255,0,0,.5);
}

.back {
  background: rgba(0,255,0,.5);
}

.right {
  background: rgba(0,0,255,.5);
}

.left {
  background: rgba(0,255,255,.5);
}

.top {
  background: rgba(255,0,255,.5);
}

.bottom {
  background: rgba(255,255,0,.5);
}

#cube .front  {
  transform: rotateY(0deg ) translateZ( 100px );
}
#cube .back {
  transform: rotateX( 180deg ) translateZ( 100px );
}
#cube .right  {
  transform: rotateY(  90deg ) translateZ( 100px );
}
#cube .left   {
  transform: rotateY( -90deg ) translateZ( 100px );
}
#cube .top    {
  transform: rotateX(  90deg ) translateZ( 100px );
}
#cube .bottom {
  transform: rotateX( -90deg ) translateZ( 100px );
}
</style>
