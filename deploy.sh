#!/bin/bash

# COMMA Studio Deployment Script
# This script builds and deploys the Next.js application

echo "🚀 Starting deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the application
echo "🔨 Building application..."
npm run build

# Restart PM2 process
echo "♻️  Restarting application..."
pm2 reload ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

echo "✅ Deployment complete!"
