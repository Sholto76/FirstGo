import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.',  // Explicitly set root directory
  build: {
    outDir: 'dist'
  }
})
