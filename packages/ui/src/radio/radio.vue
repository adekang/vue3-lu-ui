<template>
  <label
    class="lu-radio-wrapper"
    :class="{ 'lu-radio-checked': label === model }"
  >
    <span class="lu-radio">
      <input
        v-model="model"
        type="radio"
        class="lu-radio-input"
        :value="label"
        :disabled="disabled"
      />
      <span class="lu-radio-inner" :class="disabled ? 'disabled' : ''" />
    </span>
    <span class="lu-radio-label">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Radio',
  props: {
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    const model = computed({
      get() {
        return props.value
      },
      set(value) {
        context.emit('update:value', value)
      }
    })

    return { model }
  }
})
</script>
