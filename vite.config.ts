import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BlogV2/',
  build: {
    outDir: 'dist', // Output directory for the production build
    emptyOutDir: true, // Clean the output directory before each build
  },
});
