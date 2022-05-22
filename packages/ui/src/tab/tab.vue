<template>
  <div class="beans-tabs">
    <div ref="container" class="beans-tabs-nav">
      <div
        v-for="(t, index) in titles"
        :ref="(el) => {if (t === selected) selectedItem = el;}"
        :key="index"
        :class="{ selected: t === selected }"
        class="beans-tabs-nav-item"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div ref="indicator" class="beans-tabs-nav-indicator" />
    </div>
    <div class="beans-tabs-content">
      <component
        :is="c"
        v-for="(c,index) in defaults"
        :key="index"
        class="beans-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import Tab from './TabItem.vue'

export default {
  name: 'Tab',
  props: {
    selected: {
      type: String,
    },
  },
  emits: ['update:selected'],
  setup(props, context) {
    // 导航线条的移动
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)

    onMounted(() => {
      watchEffect(() => {
        const {
          width,
        } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = `${width}px`
        const {
          left: left1,
        } = container.value.getBoundingClientRect()
        const {
          left: left2,
        } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = `${left}px`
      }, {
        flush: 'post',
      })
    })

    // 判断组件是Tab
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      // @ts-expect-error
      if (tag.type.name !== Tab.name)
        throw new Error('Tabs 子标签必须是 Tab')
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
      container,
    }
  },
}
</script>

<style lang="scss">
$beansYellow: #fff5eb;
$beansBg: #fffcf9;
$beansDeepYel: #ffa347;
$box-shadow-color: rgba(255, 163, 71, 0.5);
$beansFontColor:#333;
$color: #333;
$border-color: #d9d9d9;
.beans-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $beansDeepYel;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $beansDeepYel;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
