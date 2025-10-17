# Production Deployment Guide

**COMMA Studio - Complete Deployment Checklist**

This guide provides a step-by-step checklist for deploying COMMA Studio to production on Vercel with Supabase PostgreSQL.

---

## Pre-Deployment Checklist

Complete these tasks **BEFORE** deploying to production.

### ✅ Phase 1: Security (CRITICAL)

- [ ] Rotate Anthropic API key (see [SECURITY.md](./SECURITY.md))
- [ ] Rotate Resend API key (see [SECURITY.md](./SECURITY.md))
- [ ] Generate new `NEXTAUTH_SECRET` using `openssl rand -base64 32`
- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Verify no API keys are hardcoded in the codebase
- [ ] Change default admin password to a strong password (16+ chars)

### ✅ Phase 2: Database Setup

- [ ] Create Supabase project
- [ ] Get PostgreSQL connection string
- [ ] Update Prisma schema to use PostgreSQL (already done)
- [ ] Test local connection to Supabase database
- [ ] Run migrations: `npx prisma migrate deploy`
- [ ] Verify all tables created in Supabase Table Editor
- [ ] Create admin user: `npm run seed:admin`

### ✅ Phase 3: Code Quality

- [ ] Run build locally: `npm run build` (must succeed)
- [ ] Fix any TypeScript errors
- [ ] Test all admin pages work locally
- [ ] Test all 4 AI tools generate content
- [ ] Test contact form sends emails
- [ ] Test authentication (login/logout)
- [ ] Test on mobile devices (responsive design)
- [ ] Check browser console for errors (should be none)

### ✅ Phase 4: Content Preparation

- [ ] Add at least 3 blog posts
- [ ] Add at least 3 case studies
- [ ] Add at least 3 testimonials
- [ ] Review homepage content
- [ ] Add company logo and branding
- [ ] Prepare social media images (Open Graph)
- [ ] Write About page content (if needed)

---

## Deployment Steps

### Step 1: Create GitHub Repository

1. Initialize git (if not already done):

```bash
cd "i:\COMMA Studio"
git init
git add .
git commit -m "Initial commit - ready for production"
```

2. Create GitHub repository:
   - Go to [https://github.com/new](https://github.com/new)
   - Name: `comma-studio-website`
   - Visibility: **Private** (recommended for business sites)
   - Don't initialize with README (you already have one)
   - Click **"Create repository"**

3. Push code to GitHub:

```bash
git remote add origin https://github.com/YOUR-USERNAME/comma-studio-website.git
git branch -M main
git push -u origin main
```

---

### Step 2: Create Vercel Project

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Click **"Import"** on `comma-studio-website`

---

### Step 3: Configure Environment Variables

In the Vercel project settings, add **ALL** environment variables:

#### Required Variables:

```env
# Database (Supabase PostgreSQL)
DATABASE_URL=postgresql://postgres.xxxxxxxxxxxxx:[PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:6543/postgres

# Anthropic AI (NEW, ROTATED KEY)
ANTHROPIC_API_KEY=sk-ant-api03-YOUR-NEW-KEY-HERE
AI_MODEL=claude-sonnet-4-5-20250929
AI_MAX_TOKENS=4096
AI_TEMPERATURE=0.7
AI_RATE_LIMIT_MAX=20
AI_RATE_LIMIT_WINDOW_MS=3600000

# Resend Email (NEW, ROTATED KEY)
RESEND_API_KEY=re_YOUR-NEW-KEY-HERE

# NextAuth (NEW, GENERATED SECRET)
NEXTAUTH_SECRET=YOUR-GENERATED-SECRET-HERE
NEXTAUTH_URL=https://your-site.vercel.app
```

**How to add variables in Vercel:**

1. In your Vercel project, click **"Settings"**
2. Click **"Environment Variables"**
3. For each variable:
   - Enter **Name** (e.g., `DATABASE_URL`)
   - Enter **Value** (the actual value)
   - Select **all environments** (Production, Preview, Development)
   - Click **"Add"**

---

### Step 4: Deploy

1. Click **"Deploy"** in Vercel
2. Wait for build to complete (2-5 minutes)
3. Watch the build logs for errors

**Expected output:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (50/50)
✓ Finalizing page optimization
```

---

### Step 5: Verify Deployment

Once deployed, test everything:

#### Test 1: Homepage

- [ ] Visit your production URL (e.g., `https://comma-studio.vercel.app`)
- [ ] Check all sections load correctly
- [ ] Test navigation menu
- [ ] Test contact form submission
- [ ] Check for console errors (F12 → Console)

#### Test 2: Admin Portal

- [ ] Visit `/admin/login`
- [ ] Try accessing `/admin/dashboard` without logging in (should redirect to login)
- [ ] Log in with admin credentials
- [ ] Should redirect to `/admin/dashboard`
- [ ] Test creating a blog post
- [ ] Test editing a case study
- [ ] Test deleting a testimonial

#### Test 3: AI Tools

- [ ] Go to `/admin/dashboard/ai-tools`
- [ ] Test **Blog Generator** - Generate a blog post
- [ ] Test **Ad Campaign Creator** - Generate Facebook ads
- [ ] Test **Email Marketing Creator** - Generate welcome email
- [ ] Test **Company Research Agent** - Research a company

All 4 AI tools should work correctly.

#### Test 4: Email

- [ ] Fill out contact form on homepage
- [ ] Submit form
- [ ] Check email arrives at `hello@commastudio.co.uk`
- [ ] Verify email formatting is correct

#### Test 5: Database

- [ ] Go to Supabase dashboard
- [ ] Open **Table Editor**
- [ ] Check that blog post created in Test 2 appears in `BlogPost` table
- [ ] Verify data is being saved correctly

---

### Step 6: Configure Custom Domain (Optional)

If you have a custom domain (e.g., `commastudio.com`):

1. In Vercel, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain: `commastudio.com`
4. Follow DNS configuration instructions
5. Add these DNS records at your domain registrar:

**Type A Record:**
```
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Name: www
Value: cname.vercel-dns.com
```

6. Wait for DNS propagation (5 minutes - 48 hours)
7. SSL certificate will be automatically provisioned

#### Update NEXTAUTH_URL

Once custom domain is configured:

1. Go to Vercel **Settings** → **Environment Variables**
2. Update `NEXTAUTH_URL`:
   - Old: `https://comma-studio.vercel.app`
   - New: `https://commastudio.com`
3. Redeploy: **Deployments** → **...** → **Redeploy**

---

## Post-Deployment Tasks

### Immediate (Within 24 Hours)

- [ ] Create new admin user on production (if needed)
- [ ] Test all functionality on production
- [ ] Set up error monitoring (Sentry)
- [ ] Set up analytics (Vercel Analytics or Google Analytics)
- [ ] Submit sitemap to Google Search Console
- [ ] Test website on multiple devices (mobile, tablet, desktop)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Create database backups (Supabase automatic backups should be enabled)

### Within 1 Week

- [ ] Monitor error logs daily
- [ ] Check API usage (Anthropic, Resend)
- [ ] Review analytics data
- [ ] Test email deliverability
- [ ] Create 5-10 blog posts for SEO
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure email notifications for errors

### Within 1 Month

- [ ] Review and optimize performance (Lighthouse audit)
- [ ] Implement image optimization (next/image)
- [ ] Add OpenGraph images for social sharing
- [ ] Set up automated backups
- [ ] Create documentation for content editors
- [ ] Train team on using admin portal

---

## Troubleshooting

### Build Fails on Vercel

**Error: "Module not found"**

**Fix:**
1. Check all imports are correct
2. Run `npm install` locally
3. Ensure `package.json` has all dependencies
4. Push changes and redeploy

**Error: "Environment variable not found"**

**Fix:**
1. Go to Vercel Settings → Environment Variables
2. Verify ALL variables are set
3. Check for typos in variable names
4. Redeploy

### Database Connection Fails

**Error: "Can't reach database server"**

**Fix:**
1. Verify `DATABASE_URL` is correct
2. Use **Connection Pooling** URL for Vercel (not direct connection)
3. Check Supabase project is not paused (free tier pauses after inactivity)
4. Add `?sslmode=require` to connection string if needed

### Authentication Not Working

**Error: "Session token not found"**

**Fix:**
1. Verify `NEXTAUTH_SECRET` is set in Vercel
2. Verify `NEXTAUTH_URL` matches your production URL
3. Clear browser cookies
4. Try logging in again

### AI Tools Return Error 401

**Error: "Authentication error"**

**Fix:**
1. Verify `ANTHROPIC_API_KEY` is set correctly in Vercel
2. Check key hasn't expired in Anthropic console
3. Check API usage limits haven't been exceeded
4. Test key locally first

### Emails Not Sending

**Error: "Email service not configured"**

**Fix:**
1. Verify `RESEND_API_KEY` is set in Vercel
2. Check domain is verified in Resend (if using custom domain)
3. Check API key has sending permissions
4. Test with Resend test mode first

---

## Monitoring & Maintenance

### Recommended Tools

#### Error Monitoring: Sentry

1. Create account at [https://sentry.io](https://sentry.io)
2. Install Sentry:
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```
3. Add `SENTRY_DSN` to Vercel environment variables
4. Redeploy

#### Analytics: Vercel Analytics

1. In Vercel project, go to **Analytics** tab
2. Click **"Enable"**
3. View visitor data, page views, and performance metrics

#### Uptime Monitoring: UptimeRobot

1. Create account at [https://uptimerobot.com](https://uptimerobot.com)
2. Add monitor for your production URL
3. Set up email notifications
4. Free tier: Check every 5 minutes

### What to Monitor

**Daily:**
- [ ] Error rate (Sentry dashboard)
- [ ] Uptime status (UptimeRobot)
- [ ] Contact form submissions

**Weekly:**
- [ ] API usage (Anthropic console)
- [ ] Email sending stats (Resend dashboard)
- [ ] Traffic analytics (Vercel Analytics)
- [ ] Database size (Supabase dashboard)

**Monthly:**
- [ ] Costs review (Vercel, Supabase, Anthropic, Resend)
- [ ] Security updates: `npm audit`
- [ ] Package updates: `npm outdated`
- [ ] Backup verification

---

## Rollback Procedure

If something goes wrong after deployment:

### Quick Rollback (5 minutes)

1. Go to Vercel dashboard
2. Click **"Deployments"**
3. Find the last working deployment
4. Click **"..."** → **"Promote to Production"**
5. Confirm

This instantly reverts to the previous version.

### Full Rollback (30 minutes)

If database migration caused issues:

1. Rollback Vercel deployment (above)
2. In Supabase, restore database from backup:
   - Go to **Database** → **Backups**
   - Select backup from before deployment
   - Click **"Restore"**
3. Verify data integrity
4. Test functionality

---

## Cost Estimates (Monthly)

### Hosting: Vercel

- **Free Tier**: $0/month
  - 100GB bandwidth
  - Unlimited deployments
  - Good for low traffic

- **Pro Tier**: $20/month
  - 1TB bandwidth
  - Advanced analytics
  - Password protection
  - **Recommended for production**

### Database: Supabase

- **Free Tier**: $0/month
  - 500MB database
  - 1GB file storage
  - 2GB bandwidth
  - Pauses after 1 week inactivity

- **Pro Tier**: $25/month
  - 8GB database
  - 100GB file storage
  - 250GB bandwidth
  - No pausing
  - **Recommended for production**

### AI: Anthropic

Based on usage (see [HANDOVER.md](./HANDOVER.md) for estimates):

- Light (50 generations/month): ~$10-20
- Medium (200 generations/month): ~$40-80
- Heavy (500 generations/month): ~$100-200

### Email: Resend

- **Free Tier**: $0/month
  - 3,000 emails/month
  - 100 emails/day
  - Good for contact forms

- **Pro Tier**: $20/month
  - 50,000 emails/month
  - Dedicated IP
  - Custom domains

### Total Monthly Cost

**Development/Low Traffic:**
- Vercel Free + Supabase Free + Anthropic Light + Resend Free
- **Total: ~$10-20/month**

**Production (Recommended):**
- Vercel Pro + Supabase Pro + Anthropic Medium + Resend Free
- **Total: ~$85-125/month**

---

## Success Criteria

Your deployment is successful when:

✅ Homepage loads in <2 seconds
✅ All admin features work correctly
✅ All 4 AI tools generate content
✅ Contact form sends emails
✅ Authentication protects admin routes
✅ No errors in browser console
✅ No errors in Vercel logs
✅ Mobile responsive design works
✅ SEO meta tags are present
✅ SSL certificate is active (HTTPS)

---

## Next Steps After Deployment

1. **Content Marketing**: Publish regular blog posts for SEO
2. **Social Media**: Share content on LinkedIn, Twitter
3. **SEO Optimization**: Submit to Google Search Console, build backlinks
4. **Performance**: Run Lighthouse audits, optimize images
5. **Features**: Implement image upload, search, additional tools
6. **Scale**: Monitor growth, upgrade plans as needed

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **This Project Docs**: `docs/` folder

---

## Emergency Contacts

**If production goes down:**

1. Check Vercel status page: https://www.vercel-status.com
2. Check Supabase status: https://status.supabase.com
3. Review error logs in Vercel dashboard
4. Roll back to last working deployment
5. Contact: `hello@commastudio.co.uk`

---

**Last Updated**: October 2025
**Deployment Status**: Ready for Production
**Next Review**: After first deployment

---

Good luck with your deployment! 🚀
