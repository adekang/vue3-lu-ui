<template>
  <input
    :placeholder="placeholder"
    type="text"
    :value="title"
    :disabled="disabled"
    :class="classes"
    class="beans-input"
    @input="changeValue"
  />
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String
    },
    size: {
      type: String,
      default: 'default'
    },
    title: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    const { size } = props
    const changeValue = (e) => {
      context.emit('update:value', e.target.value)
    }
    const classes = computed(() => {
      return {
        [`beans-size-${size}`]: size
      }
    })
    return {
      changeValue,
      classes
    }
  }
}
</script>
