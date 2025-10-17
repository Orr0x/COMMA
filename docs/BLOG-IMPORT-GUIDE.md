# Blog Post Import Guide

This guide explains how to import blog posts from markdown files (`content/blog/`) into the database on both local and production environments.

## Overview

The blog system supports two sources:
1. **Database posts** - Managed through the admin portal (`/admin/dashboard/blog`)
2. **Markdown files** - Legacy posts in `content/blog/` directory

The website automatically displays posts from BOTH sources. However, for the production site to show the markdown posts, you need to import them into the database.

## Why Import to Database?

- ✅ Edit posts through the admin portal
- ✅ Easier to manage content without SSH/FTP
- ✅ Can add, update, delete posts from the web interface
- ✅ Better performance (no file system reads)
- ✅ Supports future features (tags, comments, etc.)

## Local Import (Development)

### Prerequisites
- Node.js installed
- Prisma client generated (`npx prisma generate`)
- Database configured in `.env`

### Steps

1. **Ensure markdown files exist:**
   ```bash
   ls content/blog/
   # Should show: email-subject-lines-that-get-opened.md, etc.
   ```

2. **Run the import script:**
   ```bash
   npm run import:blog
   ```

3. **Check the output:**
   ```
   🚀 Starting blog post import...
   📁 Found 3 markdown files
   📝 Processing: 7 Email Subject Line Formulas...
      ✅ Imported successfully
   ...
   🎉 Blog posts imported successfully!
   ```

4. **Verify in admin portal:**
   - Go to: http://localhost:3000/admin/login
   - Navigate to Blog Management
   - You should see all imported posts

## Production Import (VPS)

### Prerequisites
- SSH access to VPS
- Content files uploaded to `/var/www/commastudio/content/blog/`

### Steps

1. **SSH into your VPS:**
   ```bash
   ssh root@YOUR_VPS_IP
   ```

2. **Navigate to project directory:**
   ```bash
   cd /var/www/commastudio
   ```

3. **Verify markdown files exist:**
   ```bash
   ls content/blog/
   ```

4. **Run the import script:**
   ```bash
   npm run import:blog
   ```

5. **Output should show:**
   ```
   📊 Import Summary:
      ✅ Imported: 3
      ⏭️  Skipped: 0
      ❌ Errors: 0
   ```

6. **Verify on live site:**
   - Open your production URL
   - Go to the blog page
   - Posts should now appear

### If Files Are Missing on VPS

If `content/blog/` doesn't exist on the VPS, you need to upload the files:

**Option 1: Using SCP (from local machine)**
```bash
scp -r "content/blog" root@YOUR_VPS_IP:/var/www/commastudio/content/
```

**Option 2: Using Git (if files are in repo)**
```bash
# On VPS
cd /var/www/commastudio
git pull origin main
```

**Option 3: Create files manually via SSH**
```bash
# On VPS
mkdir -p /var/www/commastudio/content/blog
nano /var/www/commastudio/content/blog/your-post.md
# Paste content, save with Ctrl+X, Y, Enter
```

## Script Details

### What the Script Does

1. **Reads markdown files** from `content/blog/`
2. **Parses frontmatter** (title, date, excerpt, etc.)
3. **Extracts content** (the markdown body)
4. **Creates database records** for each post
5. **Skips duplicates** (checks if slug already exists)

### Markdown File Format

Each markdown file should have frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2024-10-08"
excerpt: "A short description of your post"
category: "Email Marketing"
readTime: "6 min read"
author: "Cain Lewis"
published: true
---

# Your Post Title

Your content here...
```

### Slug Generation

The slug is automatically generated from the filename:
- File: `email-subject-lines-that-get-opened.md`
- Slug: `email-subject-lines-that-get-opened`
- URL: `/blog/email-subject-lines-that-get-opened`

## Managing Posts After Import

Once imported, you can manage posts through the admin portal:

**Local:** http://localhost:3000/admin/dashboard/blog
**Production:** http://YOUR_SITE/admin/dashboard/blog

From there you can:
- ✏️ Edit post content
- 📝 Update metadata (title, excerpt, etc.)
- 👁️ Toggle publish/unpublish
- 🗑️ Delete posts
- ➕ Create new posts

## Troubleshooting

### "No markdown files found"
- Check that `content/blog/` directory exists
- Ensure files have `.md` extension
- Verify you're in the correct directory

### "Error: Cannot find module 'gray-matter'"
- Run: `npm install`
- Ensure all dependencies are installed

### "Database connection failed"
- Check `DATABASE_URL` in `.env`
- Ensure database is running
- Run `npx prisma generate` to regenerate client

### "Post already exists"
The script skips posts that are already in the database. To re-import:

**Option 1: Delete from admin portal**
- Go to `/admin/dashboard/blog`
- Delete the existing post
- Run import script again

**Option 2: Delete from database directly**
```bash
npx prisma studio
# Open BlogPost table, delete records
```

## Re-running the Import

It's safe to run the import script multiple times:
- ✅ Skips posts that already exist (same slug)
- ✅ Only imports new posts
- ✅ Doesn't modify existing posts

If you want to update an existing post's content, you need to:
1. Delete it from the admin portal
2. Run the import script again

## Adding New Blog Posts

### Method 1: Admin Portal (Recommended)
1. Go to `/admin/dashboard/blog`
2. Click "Create New Post"
3. Write content using the editor
4. Publish

### Method 2: Markdown Files
1. Create new `.md` file in `content/blog/`
2. Add frontmatter and content
3. Run `npm run import:blog`
4. Post appears on site

## Questions?

- **How do I edit a post?** Use the admin portal at `/admin/dashboard/blog`
- **Can I delete the markdown files after import?** Yes, once imported they're in the database
- **What happens if I edit the markdown file after import?** Changes won't appear unless you re-import
- **Do I need to restart the server after import?** No, the site will show new posts immediately

## Summary

**To get your blog posts on the live site:**

```bash
# 1. SSH to VPS
ssh root@YOUR_VPS_IP

# 2. Go to project directory
cd /var/www/commastudio

# 3. Upload content files (if needed)
# Use SCP or git pull

# 4. Run import
npm run import:blog

# 5. Verify on site
# Visit /blog on your live URL
```

That's it! Your blog posts are now live and manageable through the admin portal.
