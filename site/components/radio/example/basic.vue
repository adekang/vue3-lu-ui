<template>
  <l-radio v-model:value="selectedValue" label="吃饭">
    吃饭
  </l-radio>
  <l-radio v-model:value="selectedValue" label="睡觉">
    睡觉
  </l-radio>
  <div>选择的内容是： {{ selectedValue }}</div>
</template>

<script lang="ts">
import { LRadio } from '@adekang/lu-ui'
import { ref } from 'vue'

export default {
  components: {
    LRadio,
  },
  setup() {
    const selectedValue = ref('吃饭')

    return { selectedValue }
  },
}
</script>
