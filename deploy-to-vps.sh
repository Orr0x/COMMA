#!/bin/bash

# COMMA Studio VPS Deployment Script for Hostinger
# Run this script on your VPS (Ubuntu 24.04 LTS)
# Usage: bash deploy-to-vps.sh

set -e  # Exit on error

echo "=========================================="
echo "COMMA Studio VPS Deployment"
echo "=========================================="
echo ""

# Configuration
APP_NAME="commastudio"
APP_DIR="/var/www/commastudio"
DOMAIN="${1:-yourdomain.com}"  # Pass domain as first argument
NODE_VERSION="20"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    print_error "Please run as root"
    exit 1
fi

print_success "Starting deployment..."

# Step 1: Update system
echo ""
echo "Step 1: Updating system packages..."
apt update && apt upgrade -y
print_success "System updated"

# Step 2: Install Node.js
echo ""
echo "Step 2: Installing Node.js ${NODE_VERSION}..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
    apt install -y nodejs
    print_success "Node.js installed: $(node --version)"
else
    print_warning "Node.js already installed: $(node --version)"
fi

# Step 3: Install PM2
echo ""
echo "Step 3: Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    print_success "PM2 installed"
else
    print_warning "PM2 already installed"
fi

# Step 4: Install Nginx
echo ""
echo "Step 4: Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    apt install -y nginx
    systemctl enable nginx
    systemctl start nginx
    print_success "Nginx installed and started"
else
    print_warning "Nginx already installed"
fi

# Step 5: Create application directory
echo ""
echo "Step 5: Creating application directory..."
mkdir -p ${APP_DIR}
mkdir -p ${APP_DIR}/logs
print_success "Directory created: ${APP_DIR}"

# Step 6: Instructions for file upload
echo ""
echo "=========================================="
echo "MANUAL STEP REQUIRED:"
echo "=========================================="
echo ""
echo "Please upload your project files to: ${APP_DIR}"
echo ""
echo "You can use one of these methods:"
echo ""
echo "1. SFTP (Recommended):"
echo "   - Host: 31.97.115.105"
echo "   - Username: root"
echo "   - Port: 22"
echo "   - Upload to: ${APP_DIR}"
echo ""
echo "2. Git clone (if you have a repository):"
echo "   cd ${APP_DIR}"
echo "   git clone <your-repo-url> ."
echo ""
echo "3. SCP from local machine:"
echo "   scp -r /path/to/commastudio/* root@31.97.115.105:${APP_DIR}/"
echo ""
read -p "Press ENTER after you've uploaded the files..."

# Step 7: Install dependencies
echo ""
echo "Step 7: Installing dependencies..."
cd ${APP_DIR}
if [ -f "package.json" ]; then
    npm install --production
    print_success "Dependencies installed"
else
    print_error "package.json not found! Make sure files are uploaded correctly."
    exit 1
fi

# Step 8: Create .env.production
echo ""
echo "Step 8: Setting up environment variables..."
if [ ! -f ".env.production" ]; then
    cat > .env.production <<EOF
# Database
DATABASE_URL="postgresql://postgres:coQ3Qb0OaHz35Gen@db.zzximlkcpucnxkwrdctf.supabase.co:5432/postgres"

# NextAuth
NEXTAUTH_URL="https://${DOMAIN}"
NEXTAUTH_SECRET="qQuHeWctMOEKf/VCs3wc1dSOjefZJ1TNIV6ASnZMqdo="

# API Keys
RESEND_API_KEY="re_6rRewz1A_LrRiRVM42bENu7yC2n1F3sWd"
ANTHROPIC_API_KEY="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"

# AI Config
AI_MODEL="claude-sonnet-4-5-20250929"
AI_MAX_TOKENS=4096
AI_TEMPERATURE=0.7
AI_RATE_LIMIT_MAX=20
AI_RATE_LIMIT_WINDOW_MS=3600000

# Node
NODE_ENV="production"
EOF
    print_success ".env.production created"
else
    print_warning ".env.production already exists"
fi

# Copy to .env for Prisma and Next.js
cp .env.production .env

# Step 9: Generate Prisma Client and Build
echo ""
echo "Step 9: Building application..."
npx prisma generate
npm run build
print_success "Application built successfully"

# Step 10: Configure PM2
echo ""
echo "Step 10: Setting up PM2..."
pm2 delete ${APP_NAME} 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup | tail -n 1 | bash
print_success "PM2 configured and app started"

# Step 11: Configure Nginx
echo ""
echo "Step 11: Configuring Nginx..."
cat > /etc/nginx/sites-available/${APP_NAME} <<EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Public folder
    location /public {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=3600";
    }
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/${APP_NAME} /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test and reload Nginx
nginx -t
systemctl reload nginx
print_success "Nginx configured"

# Step 12: Install SSL with Let's Encrypt
echo ""
echo "Step 12: Setting up SSL certificate..."
apt install -y certbot python3-certbot-nginx

echo ""
echo "IMPORTANT: Make sure your domain ${DOMAIN} points to this VPS IP: 31.97.115.105"
read -p "Is your domain DNS configured? (y/n): " dns_ready

if [ "$dns_ready" = "y" ]; then
    certbot --nginx -d ${DOMAIN} -d www.${DOMAIN} --non-interactive --agree-tos --email admin@${DOMAIN} || print_warning "SSL setup failed. You can run it manually later with: certbot --nginx -d ${DOMAIN}"
    print_success "SSL certificate installed"
else
    print_warning "Skipping SSL setup. Run this command after DNS is configured:"
    echo "certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
fi

# Step 13: Configure firewall
echo ""
echo "Step 13: Configuring firewall..."
if command -v ufw &> /dev/null; then
    ufw allow 22/tcp
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw --force enable
    print_success "Firewall configured"
else
    print_warning "UFW not installed, skipping firewall setup"
fi

# Final status
echo ""
echo "=========================================="
echo "DEPLOYMENT COMPLETE!"
echo "=========================================="
echo ""
echo "Application Status:"
pm2 status
echo ""
echo "Your application should now be accessible at:"
echo "  HTTP:  http://${DOMAIN}"
echo "  HTTPS: https://${DOMAIN}"
echo ""
echo "Useful commands:"
echo "  pm2 status              - Check app status"
echo "  pm2 logs ${APP_NAME}    - View logs"
echo "  pm2 restart ${APP_NAME} - Restart app"
echo "  pm2 monit              - Monitor resources"
echo ""
echo "Admin login:"
echo "  URL: https://${DOMAIN}/admin/login"
echo "  Email: admin@commastudio.com"
echo "  Password: password123"
echo ""
print_success "Deployment successful!"
