<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="lu-dialog-overlay" @click="onClickOverlay" />
      <div class="lu-dialog-wrapper">
        <div class="lu-dialog">
          <header>
            <slot name="title" />
            <span class="lu-dialog-close" @click="close" />
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <l-button type="primary" @click="onClickOk"> OK</l-button>
            <l-button type="primary" @click="onClickCancel"> Cancel</l-button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LButton } from '../button'

const Props = {
  visible: {
    type: Boolean,
    default: false
  },
  closeOnclickOverlay: {
    type: Boolean,
    default: false
  },
  ok: Function,
  cancel: Function
}

export default defineComponent({
  name: 'Dialog',
  components: { LButton },
  props: Props,
  emits: ['update:visible'],
  setup(props, context: any) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOk = () => {
      // 简写 props.ok?.() !== false
      if (props.ok && props.ok() !== false) close()
    }
    const onClickCancel = () => {
      if (props.cancel && props.cancel() !== false) close()
    }
    const onClickOverlay = () => {
      if (props.closeOnclickOverlay) close()
    }
    return {
      close,
      onClickOverlay,
      onClickOk,
      onClickCancel
    }
  }
})
</script>
