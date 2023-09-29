import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  build: {
    minify: false,
    cssCodeSplit: true,
    modulePreload: false,
  },
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
    watch: {
      usePolling: true
    }
  }
})
