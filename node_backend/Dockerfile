FROM node:20-alpine

WORKDIR /app

# Install dependencies first (layer-cached unless package files change)
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm ci --omit=dev

# Copy application source (excluding node_modules via .dockerignore)
COPY . .

EXPOSE 3000

CMD [ "node", "index.js"]
