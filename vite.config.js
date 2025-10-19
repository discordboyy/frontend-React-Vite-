import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Конфигурация Vite
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      // Проксирование запросов на backend во время разработки
      '/api': {
        target: 'http://localhost:5000', // backend (Express)
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // куда собирать проект при деплое
  },
});
