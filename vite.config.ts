import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

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
  plugins: [
    // dev-only middleware to serve pre-rendered artist pages from public/
    {
      name: 'serve-artist-meta',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          try {
            const url = req.url || '';
            if (!url.startsWith('/artist/')) return next();
            const pathOnly = url.split('?')[0].split('#')[0];
            const parts = pathOnly.split('/');
            // parts: ['', 'artist', 'slug', ...]
            if (parts.length >= 3 && parts[2]) {
              const slug = parts[2];
              const filePath = path.join(process.cwd(), 'public', 'artist', slug, 'index.html');
              if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath, 'utf8');
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(data);
                return;
              }
            }
          } catch (e) {
            // fallthrough to next
          }
          next();
        });
      },
    },
  ],
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  publicDir: 'public',
});
