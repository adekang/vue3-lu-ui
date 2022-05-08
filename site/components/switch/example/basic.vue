<template>
  <l-switch v-model:value="bool" />
</template>

<script lang="ts">
import { LSwitch } from 'lu-ui'
import { ref } from 'vue'

export default {
  components: {
    LSwitch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool,
    }
  },
}
</script>
