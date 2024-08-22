import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['source-map-js'] // Add any modules you need here
  },
  build: {
    rollupOptions: {
      external: ['source-map-js'] // Exclude specific modules from the build
    }
  }
});
