import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'dynamicImport',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `dynamic-import.${format === 'es' ? 'esm.mjs' : format === 'cjs' ? 'cjs' : 'umd.js'}`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})