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
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/api': {
        // target: 'http://164.68.115.181:7577/',
        // target: 'https://pptai.dataox.io/',
        // target: 'http://127.0.0.1:8000',
        target: 'https://a1aa-94946-23-20.ngrok-free.app/',
        changeOrigin: true,
      },
    },
  },
});
