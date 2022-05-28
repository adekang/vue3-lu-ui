# 前端组件库

monorepo + typescript + tsx + vitest + pnpm + eslint + husky + 自动部署 + vuepress@next

es // button import es6 按需加载 vite tree shaking

lib // ssr lib commonjs

dist // cdn bundle

git commit -am "update"

feat: 新特性或者新功能

fix: 修复 bug

chore: 构建过程或者其他无关的改动

refactor: 重构

ci: 持续集成,自动部署

# 前端组件库

## 安装组件库

```
# 选择一个你喜欢的包管理器

# NPM
$ npm install @adekang/lu-ui --save

# Yarn
$ yarn add @adekang/lu-ui -D

# pnpm
$ pnpm add @adekang/lu-ui -D

```

## 全局引入

```js
// main.ts
import { createApp } from 'vue'
import luUI from '@adekang/lu-ui'
import App from './App.vue'
import '@adekang/lu-ui/dist/style.css'

const app = createApp(App)

app.use(luUI)
app.mount('#app')
```

## 按需加载

```jsx
<script setup lang="ts">
import { LButton, LInput, LRadio, LTab, LTabItem } from "@adekang/lu-ui";
import "@adekang/lu-ui/lib/button/style/index.css";
import "@adekang/lu-ui/lib/input/style/index.css";
import "@adekang/lu-ui/lib/tab/style/index.css";
import { ref } from "vue";

const x = ref("导航2");
</script>

<template>
  <l-button> 组件 </l-button>
  <l-input />
  <l-radio label="吃饭"> 吃饭 </l-radio>
  <l-radio label="睡觉"> 睡觉 </l-radio>
  <l-tab v-model:selected="x">
    <l-tab-item title="导航1"> 内容1 </l-tab-item>
    <l-tab-item title="导航2"> 内容2 </l-tab-item>
  </l-tab>
</template>

<style scoped></style>

```

### 设置样式按需加载

安装插件

```
pnpm add  vite-plugin-style-import -D
```

```js
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@adekang/lu-ui',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            const styleName = name.substring(2).toLocaleLowerCase()
            return `@adekang/lu-ui/lib/${styleName}/style/index.css`
          }
        }
      ]
    })
  ]
})
```
