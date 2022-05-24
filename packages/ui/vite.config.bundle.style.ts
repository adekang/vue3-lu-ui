import { defineConfig } from 'vite'

export default defineConfig({
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
      entry: 'src/style.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'lu-ui',
    },
  },
})
