import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue2-circle-progressbar',
      fileName: (format) => `vue2-circle-progressbar.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [createVuePlugin()],
});
