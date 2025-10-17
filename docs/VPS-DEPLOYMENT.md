# Hostinger VPS Deployment Guide

This guide walks you through deploying COMMA Studio to a Hostinger VPS.

## Prerequisites

- Hostinger VPS with SSH access
- Domain name pointed to VPS IP
- Root or sudo access

## Step 1: Prepare VPS Environment

### Connect to VPS
```bash
ssh root@your-vps-ip
```

### Update system packages
```bash
apt update && apt upgrade -y
```

### Install Node.js 20.x (LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs
node --version  # Should show v20.x.x
npm --version
```

### Install PM2 (Process Manager)
```bash
npm install -g pm2
```

### Install Nginx
```bash
apt install -y nginx
systemctl enable nginx
systemctl start nginx
```

### Install Git (if not already installed)
```bash
apt install -y git
```

## Step 2: Deploy Application

### Create application directory
```bash
mkdir -p /var/www/commastudio
cd /var/www/commastudio
```

### Option A: Clone from Git (if you have a repository)
```bash
git clone your-repo-url .
```

### Option B: Upload files via SFTP
Use an SFTP client like FileZilla to upload your project files to `/var/www/commastudio`

### Install dependencies
```bash
npm install
```

### Create production .env file
```bash
nano .env.production
```

Add the following (replace with your actual values):
```env
# Database
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.zzximlkcpucnxkwrdctf.supabase.co:5432/postgres"

# NextAuth - IMPORTANT: Update with your production URL
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="qQuHeWctMOEKf/VCs3wc1dSOjefZJ1TNIV6ASnZMqdo="

# API Keys
RESEND_API_KEY=re_6rRewz1A_LrRiRVM42bENu7yC2n1F3sWd
ANTHROPIC_API_KEY=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

# AI Configuration
AI_MODEL=claude-sonnet-4-5-20250929
AI_MAX_TOKENS=4096
AI_TEMPERATURE=0.7
AI_RATE_LIMIT_MAX=20
AI_RATE_LIMIT_WINDOW_MS=3600000
```

### Generate Prisma Client
```bash
npx prisma generate
```

### Build the production app
```bash
npm run build
```

## Step 3: Set Up PM2

### Create PM2 ecosystem file
```bash
nano ecosystem.config.js
```

Add:
```javascript
module.exports = {
  apps: [{
    name: 'commastudio',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/commastudio',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### Start the application
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

The last command will generate a startup script - copy and run it to make PM2 start on boot.

### Check status
```bash
pm2 status
pm2 logs commastudio
```

## Step 4: Configure Nginx

### Create Nginx configuration
```bash
nano /etc/nginx/sites-available/commastudio
```

Add:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

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

### Enable the site
```bash
ln -s /etc/nginx/sites-available/commastudio /etc/nginx/sites-enabled/
nginx -t  # Test configuration
systemctl reload nginx
```

## Step 5: Set Up SSL with Let's Encrypt

### Install Certbot
```bash
apt install -y certbot python3-certbot-nginx
```

### Get SSL certificate
```bash
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts. Certbot will automatically:
- Get an SSL certificate
- Update your Nginx config
- Set up auto-renewal

### Test auto-renewal
```bash
certbot renew --dry-run
```

## Step 6: Verify Deployment

1. Visit `https://yourdomain.com` - should show your site
2. Test admin login at `https://yourdomain.com/admin/login`
3. Check PM2 logs: `pm2 logs commastudio`
4. Monitor resources: `pm2 monit`

## Useful Commands

### Application Management
```bash
pm2 restart commastudio    # Restart app
pm2 stop commastudio       # Stop app
pm2 logs commastudio       # View logs
pm2 monit                  # Monitor resources
```

### Update Application
```bash
cd /var/www/commastudio
git pull                   # If using Git
npm install               # Update dependencies
npm run build             # Rebuild
pm2 restart commastudio   # Restart app
```

### Nginx
```bash
nginx -t                  # Test config
systemctl reload nginx    # Reload config
systemctl status nginx    # Check status
```

### View Logs
```bash
pm2 logs commastudio      # App logs
tail -f /var/log/nginx/access.log   # Nginx access
tail -f /var/log/nginx/error.log    # Nginx errors
```

## Troubleshooting

### App won't start
```bash
pm2 logs commastudio  # Check error logs
cd /var/www/commastudio
npm run build         # Rebuild
pm2 restart commastudio
```

### 502 Bad Gateway
- Check if app is running: `pm2 status`
- Check if port 3000 is in use: `netstat -tlnp | grep 3000`
- Restart PM2: `pm2 restart commastudio`

### Database connection issues
- Verify DATABASE_URL in `.env.production`
- Check Supabase allows connections from VPS IP
- Test connection: `npx prisma db pull`

## Security Checklist

- ✅ SSL certificate installed
- ✅ Firewall configured (UFW)
- ✅ SSH key authentication (disable password login)
- ✅ Regular system updates
- ✅ PM2 runs as non-root user (recommended)
- ⚠️ Rotate API keys (currently exposed in handover docs)

## Performance Optimization

### Enable Gzip in Nginx
Add to your server block:
```nginx
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
```

### Set up caching
Next.js handles most caching, but you can add:
```nginx
location /_next/static {
    alias /var/www/commastudio/.next/static;
    expires 365d;
    access_log off;
}
```

## Monitoring

### Set up PM2 monitoring (optional)
```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### System monitoring
```bash
htop           # Interactive process viewer
df -h          # Disk usage
free -h        # Memory usage
```
