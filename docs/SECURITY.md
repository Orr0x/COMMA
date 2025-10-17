# Security Guide

**COMMA Studio - Security Best Practices**

This document covers security measures, API key rotation, and production security checklist.

---

## Table of Contents

1. [🚨 Critical Security Issues](#critical-security-issues)
2. [🔑 API Key Rotation](#api-key-rotation)
3. [🔒 Authentication Security](#authentication-security)
4. [🛡️ Production Security Checklist](#production-security-checklist)
5. [📋 Regular Security Maintenance](#regular-security-maintenance)

---

## 🚨 Critical Security Issues

### ⚠️ IMMEDIATE ACTION REQUIRED

The following API keys in `.env.local` have been exposed in the handover documentation and **MUST** be rotated:

```
ANTHROPIC_API_KEY=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
RESEND_API_KEY=re_6rRewz1A_LrRiRVM42bENu7yC2n1F3sWd
```

**These keys are ACTIVE and BILLABLE. Rotate them immediately to prevent unauthorized usage.**

---

## 🔑 API Key Rotation

### 1. Anthropic API Key Rotation

The Anthropic API key is used for all AI tools (Blog, Ads, Email, Research).

#### Step 1: Get New API Key

1. Go to [https://console.anthropic.com](https://console.anthropic.com)
2. Log in to your Anthropic account
3. Navigate to **"API Keys"** in the dashboard
4. Click **"Create Key"**
5. Name it: `COMMA Studio Production` (or similar)
6. Copy the key immediately (you won't see it again)

**Example:**
```
sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### Step 2: Update .env.local

```bash
# Open your .env.local file
code "i:\COMMA Studio\.env.local"
```

Replace the old key:

```env
# OLD (EXPOSED - DELETE THIS)
# ANTHROPIC_API_KEY=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

# NEW (YOUR NEW KEY)
ANTHROPIC_API_KEY=sk-ant-api03-YOUR-NEW-KEY-HERE
```

#### Step 3: Delete Old Key

1. Go back to Anthropic console
2. Find the old key: `sk-ant-api03-ZdlEv0R7N...`
3. Click **"Delete"** or **"Revoke"**
4. Confirm deletion

**This prevents anyone with the old key from using it.**

#### Step 4: Test AI Tools

```bash
# Restart dev server
npm run dev
```

1. Go to: [http://localhost:3000/admin/dashboard/ai-tools](http://localhost:3000/admin/dashboard/ai-tools)
2. Test the Blog Generator
3. If it generates content successfully, the new key works!

---

### 2. Resend API Key Rotation

The Resend API key is used for sending emails from the contact form.

#### Step 1: Get New API Key

1. Go to [https://resend.com](https://resend.com)
2. Log in to your account
3. Navigate to **"API Keys"**
4. Click **"Create API Key"**
5. Name it: `COMMA Studio Production`
6. Permissions: **"Sending access"** (default)
7. Copy the key immediately

**Example:**
```
re_xxxxxxxxxxxxxxxxxxxxxxxx
```

#### Step 2: Update .env.local

```env
# OLD (EXPOSED - DELETE THIS)
# RESEND_API_KEY=re_6rRewz1A_LrRiRVM42bENu7yC2n1F3sWd

# NEW (YOUR NEW KEY)
RESEND_API_KEY=re_YOUR-NEW-KEY-HERE
```

#### Step 3: Delete Old Key

1. Go back to Resend dashboard
2. Find the old key: `re_6rRewz1A_...`
3. Click **"Delete"**
4. Confirm deletion

#### Step 4: Test Email Sending

```bash
# Restart dev server
npm run dev
```

1. Go to: [http://localhost:3000](http://localhost:3000)
2. Scroll to **"Contact"** section
3. Fill out the form
4. Submit
5. Check your email at `hello@commastudio.co.uk`
6. If email arrives, the new key works!

---

### 3. NextAuth Secret Generation

The `NEXTAUTH_SECRET` is used to encrypt session tokens. **Never use the default value in production.**

#### Step 1: Generate Secure Secret

**On Mac/Linux:**
```bash
openssl rand -base64 32
```

**On Windows (PowerShell):**
```powershell
$bytes = New-Object Byte[] 32
[Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
[Convert]::ToBase64String($bytes)
```

**Example output:**
```
kZ3xJY7WqP1vR9sL4mN8oT2aU5hC6gE0dF1bX3cV9wQ=
```

#### Step 2: Update .env.local

```env
# OLD (DEFAULT - INSECURE)
# NEXTAUTH_SECRET=your-super-secret-key-replace-this-in-production-use-openssl-rand-base64-32

# NEW (YOUR GENERATED SECRET)
NEXTAUTH_SECRET=kZ3xJY7WqP1vR9sL4mN8oT2aU5hC6gE0dF1bX3cV9wQ=
```

#### Step 3: Test Authentication

```bash
# Restart dev server
npm run dev
```

1. Log out of admin panel (if logged in)
2. Go to: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
3. Log in with admin credentials
4. Should redirect to dashboard successfully

**If login works, the secret is configured correctly!**

---

## 🔒 Authentication Security

### Current Status

✅ **IMPLEMENTED:**
- NextAuth.js configured with credentials provider
- Password hashing with bcrypt (12 rounds)
- Route protection middleware
- Session-based authentication (JWT)
- Secure login page

### Security Features

#### 1. Password Hashing

All passwords are hashed with bcrypt before storage:

```typescript
// From lib/auth.ts and scripts/create-admin.ts
const hashedPassword = await bcrypt.hash(password, 12)
```

**12 rounds** = Very secure (takes ~150ms to hash on modern hardware)

#### 2. Route Protection

The middleware protects all admin routes:

```typescript
// From middleware.ts
if (pathname.startsWith('/admin') && !isPublicPath) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
}
```

**Protected routes:**
- `/admin/dashboard/*`
- `/api/admin/*`
- `/api/ai/*`

**Unprotected routes:**
- `/admin/login`
- `/api/auth/*` (NextAuth endpoints)

#### 3. Session Security

JWT tokens are:
- Signed with `NEXTAUTH_SECRET`
- Httponly cookies (not accessible via JavaScript)
- Secure flag in production (HTTPS only)

---

## 🛡️ Production Security Checklist

Before deploying to production, complete **ALL** items:

### Environment Variables

- [ ] Rotate Anthropic API key
- [ ] Rotate Resend API key
- [ ] Generate new `NEXTAUTH_SECRET` (32+ characters)
- [ ] Set `NEXTAUTH_URL` to production URL (e.g., `https://commastudio.com`)
- [ ] Never commit `.env.local` to git (check `.gitignore`)
- [ ] Set all environment variables in hosting platform (Vercel/etc.)

### Authentication

- [ ] Create strong admin password (16+ characters, mixed case, numbers, symbols)
- [ ] Store admin credentials in secure password manager
- [ ] Test login/logout flow on production
- [ ] Verify middleware protects all admin routes
- [ ] Test that unauthenticated users can't access `/admin/dashboard`
- [ ] Test that API routes return 401 for unauthenticated requests

### Database

- [ ] Use PostgreSQL (not SQLite) in production
- [ ] Enable SSL connections (`?sslmode=require` in connection string)
- [ ] Use connection pooling for serverless deployments
- [ ] Set up automated backups (Supabase does this automatically)
- [ ] Test database connection from production environment

### API Security

- [ ] Rate limiting is active (check `lib/ai/rate-limit.ts`)
- [ ] API keys are stored as environment variables (not hardcoded)
- [ ] CORS is configured correctly (Next.js handles this)
- [ ] Input validation on all API routes (Zod schemas in place)

### General Security

- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Add Content Security Policy headers (optional)
- [ ] Set up error monitoring (Sentry recommended)
- [ ] Review all dependencies: `npm audit`
- [ ] Update outdated packages: `npm outdated`
- [ ] Enable two-factor authentication on all service accounts (Vercel, Supabase, Anthropic, Resend)

### Monitoring

- [ ] Set up error logging (Sentry)
- [ ] Set up analytics (Vercel Analytics or Google Analytics)
- [ ] Monitor API usage (Anthropic dashboard)
- [ ] Monitor email sending (Resend dashboard)
- [ ] Set up uptime monitoring (UptimeRobot or similar)

---

## 📋 Regular Security Maintenance

### Weekly

- [ ] Check error logs for suspicious activity
- [ ] Monitor API usage for anomalies

### Monthly

- [ ] Review user accounts (delete inactive admins)
- [ ] Check for package updates: `npm outdated`
- [ ] Review Anthropic API usage and costs
- [ ] Review Resend email sending stats

### Quarterly

- [ ] Run security audit: `npm audit`
- [ ] Update all dependencies: `npm update`
- [ ] Rotate API keys (best practice)
- [ ] Review authentication logs
- [ ] Test backup restoration process

### Annually

- [ ] Change admin passwords
- [ ] Review all service integrations
- [ ] Security audit by third party (optional)

---

## 🚨 What to Do If Keys Are Compromised

If you suspect your API keys have been exposed:

### Immediate Actions (Within 1 Hour)

1. **Rotate ALL API keys immediately** (follow steps above)
2. **Check usage dashboards** for unauthorized activity:
   - Anthropic: [https://console.anthropic.com/settings/usage](https://console.anthropic.com/settings/usage)
   - Resend: [https://resend.com/overview](https://resend.com/overview)
3. **Change admin passwords**
4. **Review recent activity** in admin portal
5. **Check database** for unauthorized changes

### Within 24 Hours

1. **Review all logs** for suspicious patterns
2. **Contact service providers** if unauthorized charges occurred
3. **Enable additional security measures** (2FA on all accounts)
4. **Document the incident** (what was exposed, when, how discovered)

### Within 1 Week

1. **Perform full security audit**
2. **Update security documentation**
3. **Implement additional monitoring** if gaps found
4. **Review and update security policies**

---

## 🔐 Additional Security Recommendations

### For Production Deployments

#### 1. Add Rate Limiting to Public Endpoints

Currently only AI endpoints have rate limiting. Add rate limiting to:
- Contact form (`/api/contact`)
- Newsletter signup (`/api/newsletter`)

**Recommended package:** `@upstash/ratelimit` or `express-rate-limit`

#### 2. Add CAPTCHA to Forms

Prevent spam and abuse:
- Contact form
- Newsletter signup

**Recommended:** Google reCAPTCHA v3 or hCaptcha

#### 3. Set Up DDoS Protection

Use Vercel's built-in DDoS protection or Cloudflare

#### 4. Add Content Security Policy

Add CSP headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ]
}
```

#### 5. Enable Security Headers

Add security headers to prevent common attacks:

```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      ]
    }
  ]
}
```

---

## 📞 Security Contacts

**If you discover a security vulnerability:**

1. **DO NOT** create a public GitHub issue
2. **DO NOT** post in public forums
3. **DO** email directly: `hello@commastudio.co.uk`
4. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if known)

Response time: Within 48 hours

---

## Resources

- **OWASP Top 10**: https://owasp.org/www-project-top-ten/
- **Next.js Security**: https://nextjs.org/docs/advanced-features/security-headers
- **Prisma Security**: https://www.prisma.io/docs/guides/performance-and-optimization/connection-management
- **NextAuth.js Security**: https://next-auth.js.org/configuration/options#security

---

**Last Updated**: October 2025
**Next Review**: November 2025
**Status**: Active - Requires Key Rotation Before Production
