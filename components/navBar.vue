<template>
  <div>
    <ul
      class="w-full h-24 bg-primary1-200 flex gap-20 items-center justify-end pr-[5%]"
    >
      <li
        v-for="item in NAV_ENUM"
        class="text-gray-700 text-base cursor-pointer font-bold"
      >
        <NuxtLink :to="item.to">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const NAV_ENUM = Object.freeze({
  INDEX: {
    name: 'index',
    to: '/'
  },
  LOGIN: {
    name: 'Log in',
    to: '/login'
  },
})

</script>
