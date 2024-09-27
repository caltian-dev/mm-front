import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        //target: 'http://164.68.115.181:7577/',
        target: 'https://879e-94-46-23-20.ngrok-free.app/',
        changeOrigin: true,
      },
    },
  },
});
