<template>
  <label
    class="beans-radio-wrapper"
    :class="{ 'beans-radio-checked': label === model }"
  >
    <span class="beans-radio">
      <input
        v-model="model"
        type="radio"
        class="beans-radio-input"
        :value="label"
        :disabled="disabled"
      />
      <span class="beans-radio-inner" :class="disabled ? 'disabled' : ''" />
    </span>
    <span class="beans-radio-label">
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

