import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const atImport = require('postcss-import')
const path = require('path')

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      external: ['vue', '@adekang/utils'],
      input: ['src/index.ts'],
      output: [
        // esm
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        // cjs
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ]
    },
    // 这一块是不会被使用的
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs']
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false, // 避免出现: build时的 @charset 必须在第一行的警告
        additionalData: '@import "./src/styles/var.scss";'
      }
    },
    postcss: {
      plugins: [atImport({ path: path.join(__dirname, 'src`') })]
    }
  },
  plugins: [vue(), vueJsx(), dts()]
})
