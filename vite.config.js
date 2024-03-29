import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fastreboot-website/', // Set the base URL for GitHub Pages
  plugins: [react()]
});