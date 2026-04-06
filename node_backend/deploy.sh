#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [[ ! -f .env ]]; then
  echo "Missing .env file. Copy .env.example to .env and set SESSION_SECRET before deploying." >&2
  exit 1
fi

if command -v docker-compose >/dev/null 2>&1; then
  COMPOSE_CMD=(docker-compose)
elif docker compose version >/dev/null 2>&1; then
  COMPOSE_CMD=(docker compose)
else
  echo "Neither docker-compose nor 'docker compose' is available." >&2
  exit 1
fi

echo "Building and starting backend container..."
"${COMPOSE_CMD[@]}" up -d --build

echo "Waiting for health check..."
for attempt in {1..20}; do
  if wget -qO- http://127.0.0.1:3000/health >/dev/null 2>&1; then
    echo "Backend is healthy on http://127.0.0.1:3000/health"
    exit 0
  fi

  sleep 2
done

echo "Backend did not become healthy in time. Check container logs:" >&2
echo "  ${COMPOSE_CMD[*]} logs -f" >&2
exit 1