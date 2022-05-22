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
    disabled: Boolean,
  },
  emits: ['update:value'],
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  },
}
</script>

<style lang="scss">
$beansYellow: #fff5eb;
$beansBg: #fffcf9;
$beansDeepYel: #ffa347;
$box-shadow-color: rgba(255, 163, 71, 0.5);
$beansFontColor:#333;

$h: 22px;
$h2: $h - 4px;
.beans-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &.beans-checked {
    background: $beansDeepYel;
  }

  &.beans-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.beans-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
