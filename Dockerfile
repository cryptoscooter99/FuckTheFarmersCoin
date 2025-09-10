# Simple Dockerfile for deploying the Node API
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production runtime
ENV NODE_ENV=production
EXPOSE 5000
CMD ["node", "dist/index.js"]

