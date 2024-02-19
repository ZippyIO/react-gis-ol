/// <reference types="vitest" />
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '~': '/src',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'ReactGISOL',
      fileName: 'react-gis-ol',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'ol'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          ol: 'ol',
        },
      },
    },
  },
});
