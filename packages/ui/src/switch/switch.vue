<template>
  <div>
    <button
      class="lu-switch"
      :class="{ 'lu-checked': value }"
      :disabled="disabled"
      @click="toggle"
    >
      <span />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Switch'
})
</script>

<script lang="ts" setup>
const props = defineProps({
  value: Boolean,
  disabled: Boolean
})

const context = defineEmits(['update:value'])
const toggle = () => {
  context('update:value', !props.value)
}
</script>
