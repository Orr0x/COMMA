# Quick Start: Admin Portal Guide

## 🚀 Getting Started

### 1. Start the Server
```bash
cd "i:\COMMA Studio"
npm run dev
```

Visit: **http://localhost:3000** (or 3001 if 3000 is busy)

### 2. Login to Admin
**URL**: http://localhost:3000/admin/login

**Credentials**:
- Email: `admin@commastudio.co.uk`
- Password: `changeme123`

---

## 📋 Admin Portal Overview

### Dashboard
**URL**: http://localhost:3000/admin/dashboard

Shows:
- Blog posts count
- Case studies count
- Testimonials count
- Services count

Quick actions:
- Create new blog post
- Add case study
- Add testimonial

---

## ✍️ Managing Blog Posts

### List All Posts
**URL**: `/admin/dashboard/blog`
- View all blog posts
- Edit or delete any post
- See published/draft status

### Create New Post
**URL**: `/admin/dashboard/blog/new`

1. **Title** - Auto-generates slug
2. **Excerpt** - Brief summary
3. **Content** - WYSIWYG editor
4. **Author** - Your name (default: "Cain Lewis")
5. **Category** - Post category
6. **Read Time** - Estimated time
7. **Publish** - Toggle to publish

Click **Create Post**

### Edit Post
**URL**: `/admin/dashboard/blog/[id]/edit`
- Same interface as create
- Pre-filled with existing data

**View Live**: http://localhost:3000/blog

---

## 📁 Managing Case Studies

### List All Case Studies
**URL**: `/admin/dashboard/case-studies`
- View all case studies
- See client, industry, theme color
- Edit or delete

### Create New Case Study
**URL**: `/admin/dashboard/case-studies/new`

**Basic Info**:
1. **Title** - Case study name
2. **Slug** - Auto-generated URL
3. **Client** - Company name
4. **Industry** - Business sector
5. **Tagline** - One-line description
6. **Color** - Theme (purple, red, green, blue, indigo, amber)

**Rich Content** (5 WYSIWYG editors):
1. **Overview** - Client background
2. **Challenge** - Problem to solve
3. **Solution** - Your approach
4. **Results** - Outcomes and metrics
5. **Testimonial** (optional) - Client quote

**Settings**:
- Cover Image (optional)
- Publish toggle

Click **Create Case Study**

### Edit Case Study
**URL**: `/admin/dashboard/case-studies/[id]/edit`

**View Live**:
- List: http://localhost:3000/case-studies
- Detail: http://localhost:3000/case-studies/[slug]

---

## ⭐ Managing Testimonials

### List All Testimonials
**URL**: `/admin/dashboard/testimonials`
- Grid view of all testimonials
- Star ratings visible
- Featured badge
- Edit or delete

### Create New Testimonial
**URL**: `/admin/dashboard/testimonials/new`

1. **Name** - Client name
2. **Role** - Job title
3. **Company** - Company name
4. **Content** - Testimonial text
5. **Image** - Profile photo URL (optional)
6. **Rating** - 1-5 stars
7. **Featured** - Show on homepage ✓
8. **Published** - Make visible ✓

Click **Create Testimonial**

### Edit Testimonial
**URL**: `/admin/dashboard/testimonials/[id]/edit`

**View Live**:
- Homepage: http://localhost:3000#testimonials
- Case studies page testimonials section

---

## 🎨 WYSIWYG Editor Tips

**Toolbar Options**:
- **Headings** - H1, H2, H3
- **Bold, Italic, Underline, Strike**
- **Lists** - Ordered (1,2,3) and bullet points
- **Blockquote** - For quotes
- **Code block** - For code snippets
- **Links** - Add hyperlinks
- **Clean** - Remove formatting

**Best Practices**:
- Use H2 for main sections
- Use H3 for subsections
- Keep paragraphs short (2-4 sentences)
- Use bullet points for lists
- Bold important words

---

## 🎯 Quick Workflows

### Adding a New Portfolio Piece

1. **Create Case Study**:
   - Navigate: Dashboard → Case Studies → New
   - Fill in client and basic info
   - Choose color theme
   - Write content in 5 editors
   - Publish ✓

2. **Add Client Testimonial**:
   - Navigate: Dashboard → Testimonials → New
   - Enter client details
   - Paste testimonial quote
   - Set rating (5 stars)
   - Mark as Featured ✓
   - Publish ✓

3. **View Live**:
   - Check /case-studies page
   - Check homepage testimonials

**Time**: ~10-15 minutes per case study

### Publishing a Blog Post

1. **Write Post**:
   - Navigate: Dashboard → Blog → New Post
   - Write title (slug auto-generates)
   - Write excerpt (for listings)
   - Write full content in editor
   - Set category and read time

2. **Publish**:
   - Toggle "Publish this blog post" ✓
   - Click Create Post

3. **View Live**:
   - Check /blog page
   - Share URL: /blog/[your-slug]

**Time**: 5-30 minutes depending on length

---

## 🔄 Workflow States

### Blog Posts & Case Studies
- **Draft** - Not visible on website
- **Published** - Live on website immediately

### Testimonials
- **Published** - Visible in testimonials section
- **Featured** - Also shown on homepage

---

## ⚡ Keyboard Shortcuts

**In WYSIWYG Editor**:
- `Ctrl+B` - Bold
- `Ctrl+I` - Italic
- `Ctrl+U` - Underline
- `Ctrl+Z` - Undo
- `Ctrl+Y` - Redo

**Navigation**:
- Click logo to return to dashboard
- Use nav links to switch sections

---

## 🐛 Troubleshooting

### Editor Not Loading
- Refresh the page
- Check browser console for errors
- Make sure JavaScript is enabled

### Can't Save Changes
- Check all required fields are filled
- Look for red error messages
- Make sure you're still logged in

### Changes Not Showing on Website
1. Check "Published" is toggled ON
2. Refresh website (Ctrl+F5)
3. Wait 60 seconds (revalidation time)
4. Check the correct URL

### Lost Your Work
- Editor auto-saves on focus loss
- Don't close tab until "Created Successfully"
- Use Ctrl+Z to undo recent changes

---

## 🔐 Security Notes

- ✅ Always log out when done
- ✅ Change default password after first login
- ✅ Don't share login credentials
- ✅ Use strong password (12+ characters)

To change password:
1. Database: `prisma/dev.db`
2. Run: `npx ts-node scripts/create-admin.ts`
3. Choose new password

---

## 📊 Content Strategy

### Case Studies
**How many?** Aim for 6-12 strong ones
**What to include?** Diverse industries and project types
**Update frequency?** Add new ones quarterly

### Testimonials
**How many?** 9-15 total
**Featured?** Pick your best 3-6 for homepage
**Update frequency?** Add after each project

### Blog Posts
**How many?** Start with 10, add 1-2/month
**Categories?** Copywriting Tips, Case Studies, Guides
**Word count?** 800-1500 words ideal

---

## ✅ Pre-Launch Checklist

Before going live:
- [ ] Add 6+ case studies
- [ ] Add 9+ testimonials
- [ ] Publish 5+ blog posts
- [ ] Change admin password
- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check SEO meta tags

---

## 🎉 You're Ready!

You now have full control over:
- Blog content
- Portfolio case studies
- Client testimonials

**No code required** - just login and create!

---

**Need help?** Check [CASE-STUDIES-TESTIMONIALS-COMPLETE.md](CASE-STUDIES-TESTIMONIALS-COMPLETE.md) for full technical documentation.
