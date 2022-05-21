<template>
  <l-dialog v-model:visible="x" :close-onclick-overlay="false" :ok="f1" :cancel="f2">
    <template #title>
      <strong>标题</strong>
    </template>
    <template #content>
      <p>第一行文字</p>
      <p>第二行文字</p>
    </template>
  </l-dialog>
  <l-button @click="toggle">
    弹框
  </l-button>
</template>

<script lang="ts">
import { LDialog } from 'lu-ui'
import { ref } from 'vue'

export default {
  components: {
    LDialog,
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {

    }
    const f2 = () => {

    }
    return {
      x,
      toggle,
      f1,
      f2,
    }
  },
}

</script>
