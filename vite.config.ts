import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    // Dev middleware to serve pre-rendered artist pages is commented out
    // because it causes the dev server to return static /public/artist/<slug>/index.html
    // which prevents the SPA from booting. Keep the code here for reference
    // and enable only when explicitly needed.
    /*
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
    */
   {
      name: 'spa-artist-fallback',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          try {
            if ((req.method || '').toUpperCase() !== 'GET') return next();
            const url = req.url || '';
            // only match /artist/:slug paths
            if (!url.startsWith('/artist/')) return next();

            const indexPath = path.join(process.cwd(), 'index.html');
            if (!fs.existsSync(indexPath)) return next();

            const raw = fs.readFileSync(indexPath, 'utf8');
            const html = await server.transformIndexHtml(req.url || '/', raw);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(html);
            return;
          } catch (e) {
            // fall through to normal handling
          }
          next();
        });
      },
    },
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This maps "@" to "src/"
    },
  },
  server: {
    //allowedHosts
    port: 3000,
    open: true,
    host: true,
  },
  // Dev-only middleware: ensure SPA handles /artist/* routes even when
  // static files exist under /public/artist. This prevents the dev server
  // from returning a tiny static file (metadata) that does not bootstrap
  // the React app, which caused the page to appear empty or reload.
  // This middleware returns the project root `index.html` for artist paths.
  // Keep it minimal and safe for local development.
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  // During development we disable Vite's `public` directory to avoid
  // serving `public/artist/<slug>/index.html` which prevents the SPA from
  // booting when visiting `/artist/:slug`. In production builds we keep
  // the `public` directory enabled so generated metadata files are emitted.
  publicDir: process.env.NODE_ENV === 'production' ? 'public' : false,
});
