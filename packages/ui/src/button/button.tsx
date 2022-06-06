import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'

const Button = defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<'default' | 'primary'>,
      default: 'default'
    }
  },
  setup(_props, { slots }) {
    const prefixCls = 'lu-btn'
    const cls = computed(() => ({
      [prefixCls]: true,
      [`${prefixCls}-${_props.type}`]: _props.type !== 'default'
    }))
    return () => {
      return (
        <button class={cls.value}>{slots.default && slots.default()}</button>
      )
    }
  }
})

export default Button
