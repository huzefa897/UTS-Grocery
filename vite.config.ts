// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use the repo name as base (important for GitHub Pages)
export default defineConfig({
  base: '/UTS-Grocery/',
  plugins: [react()],
});
