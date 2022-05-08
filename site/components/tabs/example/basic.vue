<template>
  <l-tab v-model:selected="x">
    <l-tab-item title="导航1">
      内容1
    </l-tab-item>
    <l-tab-item title="导航2">
      内容2
    </l-tab-item>
  </l-tab>
</template>

<script lang="ts">
import { LTab, LTabItem } from 'lu-ui'
import { ref } from 'vue'

export default {
  components: {
    LTab,
    LTabItem,
  },
  setup() {
    const x = ref('导航2')
    return {
      x,
    }
  },
}
</script>
