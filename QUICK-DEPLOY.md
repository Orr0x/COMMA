# Quick VPS Deployment Guide

## Step 1: Connect to VPS
```bash
ssh root@31.97.115.105
```
Enter your password when prompted.

## Step 2: Install Prerequisites
```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install PM2
npm install -g pm2

# Install Nginx
apt install -y nginx
systemctl enable nginx
systemctl start nginx

# Install Git (for easy file transfer)
apt install -y git
```

## Step 3: Create Application Directory
```bash
mkdir -p /var/www/commastudio
cd /var/www/commastudio
```

## Step 4: Upload Files

### Option A: Using Git (if you have a repository)
```bash
git clone <your-repo-url> .
```

### Option B: Manual upload via SFTP
Use FileZilla or WinSCP to upload files to `/var/www/commastudio`

### Option C: Create a Git repo quickly (recommended)
On your local machine (Windows):
```bash
cd "I:\COMMA Studio"
git init
git add .
git commit -m "Initial commit"
```

Then push to GitHub/GitLab and clone on VPS.

## Step 5: Set Up Environment
```bash
cd /var/www/commastudio

# Create .env file
cat > .env <<EOF
DATABASE_URL="postgresql://postgres:coQ3Qb0OaHz35Gen@db.zzximlkcpucnxkwrdctf.supabase.co:5432/postgres"
NEXTAUTH_URL="https://YOUR_DOMAIN_HERE"
NEXTAUTH_SECRET="qQuHeWctMOEKf/VCs3wc1dSOjefZJ1TNIV6ASnZMqdo="
RESEND_API_KEY="re_6rRewz1A_LrRiRVM42bENu7yC2n1F3sWd"
ANTHROPIC_API_KEY="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"
AI_MODEL="claude-sonnet-4-5-20250929"
AI_MAX_TOKENS=4096
AI_TEMPERATURE=0.7
AI_RATE_LIMIT_MAX=20
AI_RATE_LIMIT_WINDOW_MS=3600000
NODE_ENV="production"
EOF

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Build application
npm run build
```

## Step 6: Start with PM2
```bash
# Create logs directory
mkdir -p logs

# Start app
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Enable PM2 on system startup
pm2 startup
# Copy and run the command it outputs
```

## Step 7: Configure Nginx
```bash
# Create Nginx config
nano /etc/nginx/sites-available/commastudio
```

Paste this (replace YOUR_DOMAIN with your actual domain):
```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN www.YOUR_DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Then:
```bash
# Enable site
ln -s /etc/nginx/sites-available/commastudio /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Test config
nginx -t

# Reload Nginx
systemctl reload nginx
```

## Step 8: Set Up SSL (Optional but Recommended)
```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get certificate (make sure DNS is pointed to VPS first!)
certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN
```

## Step 9: Configure Firewall
```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

## Step 10: Verify Deployment
```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs commastudio

# Check if app is running
curl http://localhost:3000
```

Your site should now be live at your domain!

## Useful Commands
```bash
pm2 restart commastudio    # Restart app
pm2 logs commastudio       # View logs
pm2 monit                  # Monitor resources
systemctl status nginx     # Check Nginx status
```

## Troubleshooting

### App won't start
```bash
cd /var/www/commastudio
pm2 logs commastudio
npm run build
pm2 restart commastudio
```

### 502 Bad Gateway
```bash
pm2 status
pm2 restart commastudio
systemctl restart nginx
```

### Database connection error
Check your DATABASE_URL in .env file matches Supabase connection string.
