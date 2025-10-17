# COMMA Studio - VPS Deployment Guide

## Prerequisites

- Node.js 18+ installed on VPS
- PM2 process manager
- Nginx web server
- Git (optional, for easy deployment)

## Initial Setup on VPS

### 1. Install Node.js and PM2

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+ (using NodeSource)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Verify installations
node --version
npm --version
pm2 --version
```

### 2. Clone/Upload Project to VPS

**Option A: Using Git**
```bash
cd /var/www
sudo git clone <your-repo-url> comma-studio
cd comma-studio
```

**Option B: Manual Upload**
- Upload project files via FTP/SFTP to `/var/www/comma-studio`

### 3. Set Up Environment Variables

```bash
cd /var/www/comma-studio

# Create .env.local file
sudo nano .env.local
```

Add your environment variables:
```
RESEND_API_KEY=re_your_api_key_here
```

### 4. Install Dependencies and Build

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

### 5. Start with PM2

```bash
# Start the application
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Set PM2 to start on system boot
pm2 startup
# Follow the command output to complete startup configuration
```

### 6. Configure Nginx

```bash
# Copy nginx configuration
sudo cp nginx.conf.example /etc/nginx/sites-available/comma-studio

# Edit with your domain
sudo nano /etc/nginx/sites-available/comma-studio

# Enable the site
sudo ln -s /etc/nginx/sites-available/comma-studio /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 7. Set Up SSL with Let's Encrypt (Optional but Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d commastudio.co.uk -d www.commastudio.co.uk

# Certbot will automatically configure SSL in Nginx
```

## Deployment Process

### For Future Updates

1. **Pull latest changes** (if using Git):
```bash
cd /var/www/comma-studio
git pull origin main
```

2. **Run deployment script**:
```bash
chmod +x deploy.sh
./deploy.sh
```

Or manually:
```bash
npm install
npm run build
pm2 reload ecosystem.config.js
```

## Useful PM2 Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs comma-studio

# Restart application
pm2 restart comma-studio

# Stop application
pm2 stop comma-studio

# Monitor resources
pm2 monit
```

## Troubleshooting

### Port Already in Use
If port 3000 is already taken, edit `ecosystem.config.js` and change the PORT value:
```javascript
env: {
  NODE_ENV: 'production',
  PORT: 3001, // Change to available port
}
```
Then update the nginx.conf to proxy to the new port.

### Check Application Logs
```bash
pm2 logs comma-studio --lines 100
```

### Restart Nginx
```bash
sudo systemctl restart nginx
```

### Check Nginx Logs
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## File Permissions

Ensure proper ownership:
```bash
sudo chown -R www-data:www-data /var/www/comma-studio
sudo chmod -R 755 /var/www/comma-studio
```

## Domain Configuration

Point your domain DNS to your VPS IP:
- A Record: commastudio.co.uk → Your VPS IP
- A Record: www.commastudio.co.uk → Your VPS IP

## Security Checklist

- ✅ Set up firewall (ufw)
- ✅ Install SSL certificate
- ✅ Keep Node.js and dependencies updated
- ✅ Secure .env.local file permissions
- ✅ Regular backups
- ✅ Monitor PM2 logs for errors

## Resource Usage

This Next.js app typically uses:
- **RAM**: ~150-300MB
- **CPU**: Minimal (spikes during builds)
- **Disk**: ~500MB with node_modules

## Need Help?

Common issues:
1. **502 Bad Gateway**: App not running, check `pm2 status`
2. **Build errors**: Check Node.js version (needs 18+)
3. **Email not sending**: Verify RESEND_API_KEY in .env.local
