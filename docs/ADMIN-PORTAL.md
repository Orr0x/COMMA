# COMMA Studio - Admin Portal Documentation

## Overview

The COMMA Studio website now includes a full-featured admin portal (CMS) that allows you to manage all website content without editing code. The admin system includes authentication, WYSIWYG editors, and database management.

## Features

### Content Management
- **Blog Posts**: Create, edit, delete, and publish blog articles
- **Case Studies**: Manage client case studies and portfolio work
- **Testimonials**: Add and manage client testimonials
- **Services**: Edit service pages and offerings
- **Resources**: Manage downloadable resources
- **Settings**: Configure site-wide settings

### Admin Features
- **Authentication**: Secure login system with NextAuth
- **Rich Text Editor**: WYSIWYG editor (Quill) for blog posts
- **Draft/Publish**: Save drafts before publishing
- **SEO-Friendly**: Auto-generate slugs from titles
- **Database**: SQLite database with Prisma ORM
- **Responsive**: Mobile-friendly admin interface

## Technology Stack

- **Authentication**: NextAuth.js with credentials provider
- **Database**: SQLite (Prisma ORM)
- **Editor**: React Quill (WYSIWYG)
- **Forms**: React Hook Form + Zod validation
- **UI**: shadcn/ui components

## Getting Started

### 1. Install Dependencies

All dependencies are already installed:
```bash
npm install
```

### 2. Set Up Environment Variables

Add to your `.env.local` file:

```bash
# Database
DATABASE_URL="file:./prisma/dev.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Resend (existing)
RESEND_API_KEY="re_your_key_here"
```

To generate a secure NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### 3. Database Setup

The database is already initialized, but if you need to reset:

```bash
# Reset database
npx prisma migrate reset

# Or create fresh migration
npx prisma migrate dev --name your_migration_name

# Generate Prisma Client
npx prisma generate
```

### 4. Create Admin User

Run the admin creation script:

```bash
npx ts-node scripts/create-admin.ts
```

**Default credentials:**
- Email: `admin@commastudio.co.uk`
- Password: `changeme123`

**IMPORTANT**: Change the password after first login!

### 5. Access the Admin Portal

Start the dev server:
```bash
npm run dev
```

Then navigate to: **http://localhost:3000/admin/login**

## Admin Portal Structure

```
/admin
├── /login                    # Login page
└── /dashboard               # Main dashboard
    ├── /                    # Dashboard overview
    ├── /blog                # Blog management
    │   ├── /new            # Create new post
    │   └── /[id]/edit      # Edit post
    ├── /case-studies        # Case study management
    │   ├── /new            # Create new case study
    │   └── /[id]/edit      # Edit case study
    ├── /testimonials        # Testimonial management
    │   ├── /new            # Add testimonial
    │   └── /[id]/edit      # Edit testimonial
    ├── /services            # Service management
    ├── /resources           # Resource management
    └── /settings            # Site settings
```

## Database Schema

### User (Authentication)
- id, email, password, name
- Stores admin user credentials

### BlogPost
- id, slug, title, excerpt, content
- author, category, readTime
- coverImage, published
- createdAt, updatedAt

### CaseStudy
- id, slug, title, client, industry
- color, tagline, overview
- challenge, solution, results
- testimonial, coverImage, published
- createdAt, updatedAt

### Testimonial
- id, name, role, company
- content, image, rating
- featured, published
- createdAt, updatedAt

### Service
- id, slug, title, tagline, description
- icon, features, benefits, process
- deliverables, pricing, published
- order, createdAt, updatedAt

### Resource
- id, title, description, category
- fileUrl, downloadUrl, published
- createdAt, updatedAt

## Using the Admin Portal

### Managing Blog Posts

#### Create New Post
1. Go to **Dashboard → Blog Posts → New Post**
2. Fill in:
   - **Title**: Main heading (slug auto-generates)
   - **Slug**: URL-friendly version (e.g., `how-to-write-ads`)
   - **Excerpt**: Brief summary for listings
   - **Content**: Full article content (WYSIWYG editor)
   - **Author**: Your name
   - **Category**: Post category
   - **Read Time**: Estimated reading time (e.g., "5 min read")
3. Toggle "Publish" when ready
4. Click **Create Post**

#### Edit Post
1. Go to **Dashboard → Blog Posts**
2. Click edit icon on any post
3. Make changes
4. Click **Update Post**

#### Delete Post
1. Go to **Dashboard → Blog Posts**
2. Click delete icon (trash)
3. Confirm deletion

### Managing Case Studies

Case studies work similarly to blog posts with these fields:
- **Client**: Company name
- **Industry**: Business sector
- **Color**: Theme color (purple, blue, red, etc.)
- **Tagline**: One-liner description
- **Overview**: Client background
- **Challenge**: Problem to solve
- **Solution**: Your approach
- **Results**: Outcomes and metrics
- **Testimonial**: Client quote (optional)

### Managing Testimonials

Add client testimonials with:
- **Name**: Client name
- **Role**: Job title
- **Company**: Company name
- **Content**: Testimonial text
- **Rating**: 1-5 stars
- **Featured**: Show on homepage
- **Published**: Make visible

## API Routes

All admin API routes require authentication.

### Blog Posts
- `POST /api/admin/blog` - Create post
- `PUT /api/admin/blog/[id]` - Update post
- `DELETE /api/admin/blog/[id]` - Delete post

### Case Studies
- `POST /api/admin/case-studies` - Create case study
- `PUT /api/admin/case-studies/[id]` - Update case study
- `DELETE /api/admin/case-studies/[id]` - Delete case study

### Testimonials
- `POST /api/admin/testimonials` - Create testimonial
- `PUT /api/admin/testimonials/[id]` - Update testimonial
- `DELETE /api/admin/testimonials/[id]` - Delete testimonial

All routes return JSON and use standard HTTP status codes.

## Frontend Integration

The existing frontend (markdown-based blog) still works. To use database content:

### Option 1: Hybrid Approach (Current)
- Keep existing markdown blog posts
- New posts use database
- Both can coexist

### Option 2: Full Database (Future)
Update `/app/blog/page.tsx` to fetch from database:

```typescript
import { prisma } from '@/lib/prisma'

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    // Render posts from database
  )
}
```

## Security

### Authentication
- Passwords hashed with bcrypt (10 rounds)
- Session-based auth with NextAuth
- JWT tokens for API authentication

### Authorization
- All admin routes protected by middleware
- Session validation on every request
- Automatic redirect to login if unauthorized

### Best Practices
- Change default admin password immediately
- Use strong passwords (12+ characters)
- Keep NEXTAUTH_SECRET secure
- Don't commit .env.local to git

## Deployment

### VPS Deployment (Hostinger)

1. **Upload files** including `prisma/` folder

2. **Set environment variables** on VPS:
```bash
DATABASE_URL="file:./prisma/prod.db"
NEXTAUTH_SECRET="production-secret"
NEXTAUTH_URL="https://yourdomain.com"
RESEND_API_KEY="your-key"
```

3. **Run migrations**:
```bash
npx prisma migrate deploy
npx prisma generate
```

4. **Create admin user**:
```bash
npx ts-node scripts/create-admin.ts
```

5. **Build and start**:
```bash
npm run build
pm2 start ecosystem.config.js
```

### Vercel Deployment

Vercel requires PostgreSQL instead of SQLite:

1. **Set up database** (Vercel Postgres, Supabase, or Railway)

2. **Update schema** in `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"  // Change from sqlite
  url      = env("DATABASE_URL")
}
```

3. **Add environment variables** in Vercel dashboard:
   - DATABASE_URL
   - NEXTAUTH_SECRET
   - NEXTAUTH_URL
   - RESEND_API_KEY

4. **Deploy** - Vercel will run migrations automatically

## Database Management

### View Database (GUI)
```bash
npx prisma studio
```
Opens at http://localhost:5555

### Backup Database
```bash
# SQLite backup
cp prisma/dev.db prisma/dev.db.backup

# PostgreSQL backup
pg_dump $DATABASE_URL > backup.sql
```

### Migrations
```bash
# Create new migration
npx prisma migrate dev --name description

# Apply migrations (production)
npx prisma migrate deploy

# Reset database (WARNING: deletes data)
npx prisma migrate reset
```

## Customization

### Add New Content Types

1. **Add to schema** (`prisma/schema.prisma`):
```prisma
model FAQ {
  id       String @id @default(cuid())
  question String
  answer   String
  order    Int    @default(0)
  published Boolean @default(true)
}
```

2. **Run migration**:
```bash
npx prisma migrate dev --name add_faq
```

3. **Create admin pages**:
- `/app/admin/dashboard/faqs/page.tsx`
- `/app/admin/dashboard/faqs/new/page.tsx`

4. **Create API routes**:
- `/app/api/admin/faqs/route.ts`

### Change Editor
Replace React Quill with alternatives:
- **Tiptap**: Modern, extensible
- **Slate**: Flexible framework
- **Draft.js**: Facebook's editor

### Add File Uploads
Use UploadThing (already installed):

1. **Set up UploadThing**:
```bash
# Add to .env.local
UPLOADTHING_SECRET=your_secret
UPLOADTHING_APP_ID=your_app_id
```

2. **Create upload route**:
```typescript
// app/api/uploadthing/route.ts
import { createUploadthing } from "uploadthing/next"

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      return { fileUrl: file.url }
    }),
}
```

3. **Add to form**:
```typescript
import { UploadButton } from "@uploadthing/react"

<UploadButton
  endpoint="imageUploader"
  onClientUploadComplete={(res) => {
    setCoverImage(res[0].fileUrl)
  }}
/>
```

## Troubleshooting

### Can't Login
- Verify admin user exists: `npx prisma studio`
- Check NEXTAUTH_SECRET is set
- Verify password (run create-admin.ts again)

### Database Errors
```bash
# Regenerate Prisma Client
npx prisma generate

# Check database connection
npx prisma db pull
```

### Build Errors
- Run `npx prisma generate` before building
- Ensure DATABASE_URL is set
- Check all environment variables

### Editor Not Loading
- React Quill requires client-side rendering
- Component must use `'use client'` directive
- Import CSS: `import 'react-quill/dist/quill.snow.css'`

## Support

For issues:
1. Check [Next.js docs](https://nextjs.org/docs)
2. Check [Prisma docs](https://www.prisma.io/docs)
3. Check [NextAuth docs](https://next-auth.js.org)

## 🤖 AI Features (Next Phase)

**Planned AI copywriting assistants** powered by Claude API:

### 1. AI Blog Post Assistant
- Generate complete blog posts from topics
- Suggest catchy titles and headlines
- Write compelling excerpts
- Improve and rewrite existing copy
- **Integrated directly into blog editor**

### 2. AI Ad Campaign Creator
- Generate ad copy for Meta, Google, LinkedIn
- Create 5-10 variations for A/B testing
- Platform-specific character limits
- Export to CSV for ad platforms
- **Dedicated admin tool**

### 3. AI Email Marketing Creator
- Write email sequences (welcome, promotional, etc.)
- Generate high-converting subject lines
- Create HTML email templates
- Multi-email campaign builder
- **Dedicated admin tool**

**Documentation**: See [AI-FEATURES-PLAN.md](AI-FEATURES-PLAN.md) for full details.

**Cost**: ~$30-50/month for Claude API (moderate usage)

---

## Roadmap

Future enhancements:
- [x] AI Blog Post Assistant (Next phase)
- [x] AI Ad Campaign Creator (Next phase)
- [x] AI Email Marketing Creator (Next phase)
- [ ] Image upload to cloud storage
- [ ] Content versioning/history
- [ ] Bulk actions (delete multiple)
- [ ] Content scheduling
- [ ] Analytics integration
- [ ] Multi-user support with roles
- [ ] Content approval workflow
- [ ] Media library
- [ ] SEO optimization tools
- [ ] Content search

## Files Created

### Core Files
- `prisma/schema.prisma` - Database schema
- `lib/prisma.ts` - Prisma client singleton
- `lib/auth.ts` - NextAuth configuration
- `scripts/create-admin.ts` - Admin user creation script

### Admin Pages
- `app/admin/login/page.tsx` - Login page
- `app/admin/dashboard/layout.tsx` - Admin layout with auth
- `app/admin/dashboard/page.tsx` - Main dashboard
- `app/admin/dashboard/blog/page.tsx` - Blog list
- `app/admin/dashboard/blog/new/page.tsx` - Create post
- `app/admin/dashboard/blog/[id]/edit/page.tsx` - Edit post

### Components
- `components/admin/admin-nav.tsx` - Admin navigation
- `components/admin/blog-form.tsx` - Blog post form with editor
- `components/admin/delete-blog-button.tsx` - Delete confirmation

### API Routes
- `app/api/auth/[...nextauth]/route.ts` - NextAuth handler
- `app/api/admin/blog/route.ts` - Create blog post
- `app/api/admin/blog/[id]/route.ts` - Update/delete blog post

## License

© 2024 COMMA Studio. All rights reserved.
