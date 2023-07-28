<template>
  <div>
    <span v-if="props.warningText" class="text-error">{{ props.warningText }}</span>
    <input
      class="input-base"
      :class="borderClass"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
      @keyup.enter="userEnter"
    >
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  warningText: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'userEnter'])

const borderClass = computed(() => {
  if (props.warningText) {
    return '!border-error'
  }
  return ''
})

const userEnter = () => {
  emit('userEnter')
}

</script>

<style lang="scss" scoped>
.input-base {
  width: 100%;
  height: 60px;
  padding-left: 15px;
  font-size: 20px;
  &::placeholder {
    @apply text-gray-400
  }
  &:focus {
    outline: none;
  }
  @apply border border-[1px] border-gray-500 rounded-sm
}
</style>
