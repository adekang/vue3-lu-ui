<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="beans-dialog-overlay" @click="onClickOverlay" />
      <div class="beans-dialog-wrapper">
        <div class="beans-dialog">
          <header>
            <slot name="title" />
            <span class="beans-dialog-close" @click="close" />
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <l-button type="primary" @click="onClickOk"> OK </l-button>
            <l-button type="primary" @click="onClickCancel"> Cancel </l-button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LButton } from '../button'

interface Props {
  ok: () => boolean
  cancel: () => boolean
  closeOnclickOverlay: boolean
}

interface Context {
  emit: (arg0: string, arg1: boolean) => void
}

export default defineComponent({
  name: 'Dialog',
  components: { LButton },
  props: {
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
  },
  emits: ['update:visible'],
  setup(props: Props, context: Context) {
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

