/// <reference types="vitest" />

import react from '@vitejs/plugin-react';

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
