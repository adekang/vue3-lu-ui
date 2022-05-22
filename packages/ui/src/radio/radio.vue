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
import { computed } from 'vue'

export default {
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
}
</script>

<style lang="scss">
$clickColor: #fc921e;
.beans-radio-wrapper {
  color: #606266;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  display: inline-block;
  outline: none;
  margin-right: 20px;

  > .beans-radio {
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    > .beans-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &.disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }

      &:after {
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 250ms ease-in;
      }
    }

    > .beans-radio-input {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  > .beans-radio-label {
    padding-left: 10px;
  }

  &.beans-radio-checked {
    .beans-radio {
      .beans-radio-inner {
        border-color: $clickColor;
        background: $clickColor;

        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }

    .beans-radio-label {
      color: $clickColor;
    }
  }
}
</style>
