<template>
  <div class="lu-tabs">
    <div ref="container" class="lu-tabs-nav">
      <div
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el
          }
        "
        :key="index"
        :class="{ selected: t === selected }"
        class="lu-tabs-nav-item"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div ref="indicator" class="lu-tabs-nav-indicator" />
    </div>
    <div class="lu-tabs-content">
      <component
        :is="c"
        v-for="(c, index) in defaults"
        :key="index"
        class="lu-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from 'vue'
import Tab from './tabItem.vue'

export default defineComponent({
  name: 'Tab',
  props: {
    selected: {
      type: String
    }
  },
  emits: ['update:selected'],
  setup(props, context: any) {
    // 导航线条的移动
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)

    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect()
          indicator.value.style.width = `${width}px`
          const { left: left1 } = container.value.getBoundingClientRect()
          const { left: left2 } = selectedItem.value.getBoundingClientRect()
          const left = left2 - left1
          indicator.value.style.left = `${left}px`
        },
        {
          flush: 'post'
        }
      )
    })

    // 判断组件是Tab
    const defaults = context.slots.default()
    defaults.forEach((tag: { type: { name: string } }) => {
      if (tag.type.name !== Tab.name) throw new Error('Tabs 子标签必须是 Tab')
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container
    }
  }
})
</script>
