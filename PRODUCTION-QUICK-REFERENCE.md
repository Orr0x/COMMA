# COMMA Studio - Production Quick Reference

**🌐 LIVE URL:** http://31.97.115.105:8080

---

## 🔐 Admin Access

**Login:** http://31.97.115.105:8080/admin/login

**Credentials:**
- Email: `james@commastudio.com`
- Password: `NewPassword123!`

---

## 🖥️ Server Access

**SSH:**
```bash
ssh root@31.97.115.105
```

**Application Directory:**
```bash
cd /var/www/commastudio
```

---

## 🚀 Quick Commands

### Check Status
```bash
pm2 status
```

### View Logs
```bash
pm2 logs commastudio --lines 50
```

### Restart App
```bash
pm2 restart commastudio
```

### Update Code
```bash
cd /var/www/commastudio
git pull
npm install
npm run build
pm2 restart commastudio
```

---

## 🗄️ Database

**Supabase Dashboard:**
https://supabase.com/dashboard/project/zzximlkcpucnxkwrdctf

**Connection String:**
```
postgresql://postgres:coQ3Qb0OaHz35Gen@db.zzximlkcpucnxkwrdctf.supabase.co:5432/postgres
```

---

## 📁 Important Files

| File | Location |
|------|----------|
| Environment Variables | `/var/www/commastudio/.env` |
| PM2 Config | `/var/www/commastudio/ecosystem.config.js` |
| Nginx Config | `/etc/nginx/sites-available/commastudio` |
| Application Logs | `/var/www/commastudio/logs/` |

---

## 🔥 Emergency Procedures

### App Down?
```bash
pm2 restart commastudio
pm2 logs commastudio
```

### Database Issues?
```bash
cd /var/www/commastudio
npx prisma generate
pm2 restart commastudio
```

### Nginx Issues?
```bash
nginx -t
systemctl restart nginx
```

---

## 📞 Support

- Full Documentation: `docs/VPS-DEPLOYMENT-COMPLETE.md`
- Handover Document: `docs/HANDOVER.md`
- Setup Guide: `docs/SUPABASE-SETUP.md`

---

**Last Updated:** October 17, 2025
**Status:** ✅ OPERATIONAL
