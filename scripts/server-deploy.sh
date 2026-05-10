#!/usr/bin/env bash
set -euo pipefail

# Server deploy script: install production deps, build, and serve the built folder.
# Usage on server:
#   PORT=8080 bash scripts/server-deploy.sh
# Notes:
# - Uses `npm ci --omit=dev` to avoid installing devDependencies on server.
# - If `pm2` is available, it will use `pm2 serve` for a managed process.

PORT=${PORT:-3000}

echo "[server-deploy] Installing production dependencies..."
npm ci --omit=dev

echo "[server-deploy] Building..."
npm run build

echo "[server-deploy] Starting static server on 0.0.0.0:${PORT}"
if command -v pm2 >/dev/null 2>&1; then
  echo "[server-deploy] Detected pm2 — using pm2 to serve build/"
  pm2 serve build "${PORT}" --name mastercrafter --spa
else
  echo "[server-deploy] pm2 not found — using npx serve (background)"
  npx serve -s build -l "${PORT}" &
  disown
fi

echo "[server-deploy] Done. Visit http://<server-ip>:${PORT}"
