<template>
  <div>
    <button
      class="beans-switch"
      :class="{ 'beans-checked': value }"
      :disabled="disabled"
      @click="toggle"
    >
      <span />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Switch',
  props: {
    value: Boolean,
    disabled: Boolean
  },
  emits: ['update:value'],
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>
