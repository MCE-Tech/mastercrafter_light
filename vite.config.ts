import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This maps "@" to "src/"
    },
  },
  server: {
    // allowedHosts:[WWW_URL_PLACEHOLDER,URL_PLACEHOLDER],
    port: 3000,
    open: true,
    host: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  publicDir: 'public',
});
