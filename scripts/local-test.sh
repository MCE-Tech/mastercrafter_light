#!/usr/bin/env bash
set -euo pipefail

# Local test script for building and serving the app locally
# Usage:
#   PORT=5000 bash scripts/local-test.sh
#   or
#   bash scripts/local-test.sh

PORT=${PORT:-3000}

echo "[local-test] Installing dependencies (development)..."
npm ci

echo "[local-test] Building..."
npm run build

echo "[local-test] Serving build at http://localhost:${PORT} (SPA fallback enabled)"
npx serve -s build -l "${PORT}"
