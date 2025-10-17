# Supabase Database Setup Guide

**COMMA Studio - PostgreSQL Migration**

This guide will walk you through setting up a Supabase PostgreSQL database for your COMMA Studio project.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Create Supabase Project](#create-supabase-project)
3. [Get Connection String](#get-connection-string)
4. [Update Environment Variables](#update-environment-variables)
5. [Run Migrations](#run-migrations)
6. [Create Admin User](#create-admin-user)
7. [Test Connection](#test-connection)
8. [Migrate Existing Data (Optional)](#migrate-existing-data-optional)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- ✅ Supabase account (you mentioned you have one)
- ✅ COMMA Studio project on your local machine
- ✅ Node.js and npm installed

---

## Create Supabase Project

### Step 1: Log in to Supabase

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Sign in"** and log in to your account
3. Click **"New Project"**

### Step 2: Configure Your Project

Fill in the project details:

- **Organization**: Select or create an organization
- **Name**: `comma-studio` (or your preferred name)
- **Database Password**: Generate a strong password
  - ⚠️ **IMPORTANT**: Save this password securely - you'll need it!
  - Example: Use a password manager or write it down temporarily
- **Region**: Choose the region closest to your users
  - UK/Europe: `eu-west-1` (Ireland)
  - US: `us-east-1` (N. Virginia)
- **Pricing Plan**:
  - **Free tier**: Perfect for development and testing
  - **Pro**: $25/month for production (recommended)

### Step 3: Wait for Project Creation

- Project creation takes 1-2 minutes
- You'll see a progress indicator
- Once complete, you'll be redirected to your project dashboard

---

## Get Connection String

### Method 1: From Supabase Dashboard (Recommended)

1. In your Supabase project, click **"Settings"** (gear icon in left sidebar)
2. Click **"Database"** in the settings menu
3. Scroll down to **"Connection string"** section
4. You'll see several connection string options:

#### Option A: Connection Pooling (Recommended for Serverless/Vercel)

Look for **"Connection Pooling"** section and select **"Mode: Transaction"**

```
postgresql://postgres.xxxxxxxxxxxxx:[YOUR-PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:6543/postgres
```

**When to use this:**
- Deploying to Vercel or other serverless platforms
- Using Next.js API routes
- Need connection pooling

#### Option B: Direct Connection (For Local Development)

Look for **"Connection string"** section and select **"URI"**

```
postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxxxxx.supabase.co:5432/postgres
```

**When to use this:**
- Local development
- Traditional server deployment
- Running migrations

### Method 2: Manual Construction

If you can't find it, construct it manually:

**Format:**
```
postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

**Where:**
- `[YOUR-PASSWORD]`: The database password you set during project creation
- `[PROJECT-REF]`: Your project reference ID (found in project URL or settings)

**Example:**
```
postgresql://postgres:MySecurePassword123@db.abcdefghijklmnop.supabase.co:5432/postgres
```

---

## Update Environment Variables

### Step 1: Update .env.local

Open your `.env.local` file in the COMMA Studio project root:

```bash
# On Windows
notepad "i:\COMMA Studio\.env.local"

# Or use VS Code
code "i:\COMMA Studio\.env.local"
```

### Step 2: Update DATABASE_URL

Add or update the `DATABASE_URL` variable:

**For Local Development (Direct Connection):**
```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

**For Production/Vercel (Connection Pooling):**
```env
DATABASE_URL="postgresql://postgres.xxxxxxxxxxxxx:[YOUR-PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:6543/postgres"
```

### Step 3: Add Prisma Direct URL (Optional but Recommended)

For migrations, add a direct connection URL:

```env
DATABASE_URL="postgresql://postgres.xxxxxxxxxxxxx:[YOUR-PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:6543/postgres"
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

### Complete .env.local Example:

```env
# Resend API Key (for contact form emails)
RESEND_API_KEY=re_6rRewz1A_LrRiRVM42bENu7yC2n1F3sWd

# Anthropic Claude API Configuration
ANTHROPIC_API_KEY=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
AI_MODEL=claude-sonnet-4-5-20250929
AI_MAX_TOKENS=4096
AI_TEMPERATURE=0.7
AI_RATE_LIMIT_MAX=20
AI_RATE_LIMIT_WINDOW_MS=3600000

# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-key-replace-this-in-production-use-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000

# Supabase PostgreSQL Database
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

⚠️ **IMPORTANT**: Replace `[YOUR-PASSWORD]` and `[PROJECT-REF]` with your actual values!

---

## Run Migrations

Now that your database is connected, let's create all the tables.

### Step 1: Generate Prisma Client

```bash
cd "i:\COMMA Studio"
npx prisma generate
```

Expected output:
```
✔ Generated Prisma Client (5.15.0 | library) to ./node_modules/@prisma/client
```

### Step 2: Push Schema to Database

For initial setup, use `db push` (faster than migrations):

```bash
npx prisma db push
```

Expected output:
```
Environment variables loaded from .env.local
Prisma schema loaded from prisma\schema.prisma
Datasource "db": PostgreSQL database

🚀  Your database is now in sync with your Prisma schema. Done in 1.23s

✔ Generated Prisma Client (5.15.0 | library) to ./node_modules/@prisma/client
```

**OR** use migrations (more controlled):

```bash
npx prisma migrate deploy
```

### Step 3: Verify Tables Created

Open Supabase Table Editor:

1. Go to your Supabase dashboard
2. Click **"Table Editor"** in the left sidebar
3. You should see all tables:
   - `User`
   - `Account`
   - `Session`
   - `VerificationToken`
   - `BlogPost`
   - `CaseStudy`
   - `Testimonial`
   - `Service`
   - `Resource`
   - `Settings`
   - `ResearchReport`

If you see all these tables, **SUCCESS!** 🎉

---

## Create Admin User

Now create your first admin user:

### Step 1: Run Admin Creation Script

```bash
cd "i:\COMMA Studio"
npm run seed:admin
```

### Step 2: Follow the Prompts

```
=================================
COMMA Studio - Admin User Setup
=================================

Enter admin email: your@email.com
Enter admin password (min 8 characters): ********
Enter admin name (optional, press Enter to skip): Your Name

⏳ Creating admin user...

✅ Admin user created successfully!

=================================
Login Credentials
=================================
Email:    your@email.com
Name:     Your Name
Password: ********
=================================

⚠️  IMPORTANT: Store these credentials securely!
🔗 Login at: http://localhost:3000/admin/login
```

### Step 3: Verify in Supabase

1. Go to Supabase **Table Editor**
2. Click on the **User** table
3. You should see your admin user with hashed password

---

## Test Connection

### Test 1: Start Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

### Test 2: Test Admin Login

1. Go to: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Enter your admin credentials
3. Click **"Sign In"**
4. You should be redirected to: `/admin/dashboard`

If successful, **AUTHENTICATION WORKS!** 🎉

### Test 3: Create Test Blog Post

1. In admin dashboard, click **"Blog"**
2. Click **"New Post"**
3. Fill in the form
4. Click **"Publish"**
5. Check Supabase Table Editor → `BlogPost` table
6. Your post should be there!

### Test 4: Test AI Tools

1. Go to **"AI Tools"** in admin dashboard
2. Try generating a blog post with the AI Blog Assistant
3. If it works, database + AI integration is working!

---

## Migrate Existing Data (Optional)

If you have existing data in SQLite that you want to migrate:

### Step 1: Export SQLite Data

```bash
# Install sqlite3 if needed
npm install -g sqlite3

# Export data to JSON
sqlite3 prisma/dev.db .dump > backup.sql
```

### Step 2: Manual Migration

Since the schema is identical, you can:

1. **Option A**: Recreate content manually through admin interface
2. **Option B**: Use Prisma Studio to copy data:

```bash
# Open Prisma Studio
npx prisma studio
```

3. Open two browser tabs
4. Switch DATABASE_URL between SQLite and PostgreSQL
5. Copy data manually (recommended for small datasets)

**OR**

### Step 3: Automated Migration Script

If you have a lot of data, create a migration script (advanced):

```typescript
// scripts/migrate-data.ts
import { PrismaClient as SQLiteClient } from '@prisma/client'
import { PrismaClient as PostgresClient } from '@prisma/client'

// ... migration logic
```

---

## Troubleshooting

### Error: "Can't reach database server"

**Cause**: Wrong connection string or network issue

**Fix:**
1. Check your `DATABASE_URL` in `.env.local`
2. Verify the password is correct (no special characters need URL encoding)
3. Check your internet connection
4. Try the direct connection URL instead of pooler URL

### Error: "SSL connection required"

**Cause**: Supabase requires SSL connections

**Fix:** Add `?sslmode=require` to your connection string:

```env
DATABASE_URL="postgresql://postgres:password@db.xxx.supabase.co:5432/postgres?sslmode=require"
```

### Error: "Password authentication failed"

**Cause**: Wrong database password

**Fix:**
1. Go to Supabase **Settings** → **Database**
2. Click **"Reset Database Password"**
3. Generate new password
4. Update `.env.local` with new password
5. Run `npx prisma db push` again

### Error: "Prepared statement already exists"

**Cause**: Connection pooling issue with migrations

**Fix:** Use `DIRECT_URL` for migrations:

Update `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

Then add `DIRECT_URL` to `.env.local`:

```env
DIRECT_URL="postgresql://postgres:password@db.xxx.supabase.co:5432/postgres"
```

### Error: "Environment variable not found: DATABASE_URL"

**Cause**: `.env.local` file not being read

**Fix:**
1. Ensure file is named exactly `.env.local` (not `.env.local.txt`)
2. Restart your terminal/IDE
3. Make sure you're in the correct directory: `cd "i:\COMMA Studio"`

### Migration Shows "No pending migrations"

**Cause**: Using SQLite migrations on PostgreSQL

**Fix:** Reset migrations (WARNING: Deletes all data):

```bash
# Backup first!
npx prisma db push --force-reset
```

---

## Production Deployment (Vercel)

When deploying to Vercel:

### Step 1: Add Environment Variables in Vercel

1. Go to your Vercel project
2. **Settings** → **Environment Variables**
3. Add **all** environment variables from `.env.local`:

```
DATABASE_URL = postgresql://postgres.xxx...
ANTHROPIC_API_KEY = sk-ant-...
RESEND_API_KEY = re_...
NEXTAUTH_SECRET = (generate new: openssl rand -base64 32)
NEXTAUTH_URL = https://yoursite.vercel.app
AI_MODEL = claude-sonnet-4-5-20250929
AI_MAX_TOKENS = 4096
AI_TEMPERATURE = 0.7
AI_RATE_LIMIT_MAX = 20
AI_RATE_LIMIT_WINDOW_MS = 3600000
```

### Step 2: Use Pooling URL for Vercel

For `DATABASE_URL`, use the **Connection Pooling** URL (with `.pooler.supabase.com`)

### Step 3: Deploy

```bash
git push origin main
```

Vercel will automatically deploy.

### Step 4: Create Admin User in Production

After deployment:

```bash
# Set environment variables
ADMIN_EMAIL=admin@commastudio.co.uk ADMIN_PASSWORD=securepass123 DATABASE_URL="your-production-db-url" npm run seed:admin
```

Or use Supabase SQL Editor to create user manually.

---

## Next Steps

✅ **Database is now connected!**

What to do next:

1. **Test authentication** - Log in to admin portal
2. **Create content** - Add blog posts, case studies, testimonials
3. **Test AI tools** - Generate content with AI assistants
4. **Deploy to production** - Follow Vercel deployment guide
5. **Rotate API keys** - For security (see SECURITY.md)

---

## Resources

- **Supabase Docs**: https://supabase.com/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Next.js + Supabase**: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- **Connection Pooling**: https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler

---

## Need Help?

If you run into issues:

1. Check the [Troubleshooting](#troubleshooting) section above
2. Check Supabase logs: **Logs** → **Postgres Logs** in dashboard
3. Check Prisma logs: Add `DEBUG=prisma:*` before your command
4. Review this guide: `docs/SUPABASE-SETUP.md`

---

**Last Updated**: October 2025
**Status**: Ready for Production Migration
