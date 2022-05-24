import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vueJsx(), vue()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      external: [
        'vue',
        '@adekang/utils',
      ],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          '@adekang/utils': 'adekangUtils',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'lu-ui',
    },
  },
})
