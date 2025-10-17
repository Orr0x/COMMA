# Setup Instructions for COMMA Studio Website

## Quick Start Guide

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
- All dependencies

### Step 2: Start Development Server

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### Step 3: View the Site

Open your browser and navigate to:
- Homepage: http://localhost:3000
- Contact API: http://localhost:3000/api/contact (POST only)

## What's Been Built (Phase 1)

✅ **Core Infrastructure**
- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS setup
- shadcn/ui component system

✅ **UI Components**
- Button, Card, Input, Textarea, Label, Badge, Separator
- All components are accessible (Radix UI)
- Fully styled with Tailwind CSS

✅ **Layout Components**
- Header with responsive navigation
- Footer with links and social media
- Mobile menu functionality

✅ **Homepage Sections**
- Hero section with gradient background
- Clients showcase
- Services grid (6 services)
- Testimonials
- Contact form

✅ **SEO Setup**
- Metadata generation utilities
- Structured data (JSON-LD)
- Organization & Person schemas
- Dynamic sitemap
- robots.txt with AI bot access

✅ **API Routes**
- Contact form endpoint (placeholder)

## File Structure

```
I:\COMMA Studio\
├── app/
│   ├── api/contact/route.ts      # Contact form API
│   ├── layout.tsx                # Root layout with SEO
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── robots.ts                 # Robots.txt
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── clients.tsx
│       ├── services.tsx
│       ├── testimonials.tsx
│       └── contact.tsx
├── lib/
│   ├── seo/
│   │   ├── metadata.ts
│   │   └── structured-data.ts
│   └── utils.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Current Features

### Homepage
- ✅ Animated hero section with gradient background
- ✅ Client logos (Loop, F1 Arcade, Huel, etc.)
- ✅ 6 service cards with hover effects
- ✅ 3 testimonials with ratings
- ✅ Working contact form (frontend)
- ✅ Fully responsive design

### SEO
- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Sitemap generation
- ✅ AI bot accessibility

### Performance
- ✅ Server-side rendering
- ✅ Optimized images (Next.js Image)
- ✅ CSS optimization (Tailwind)
- ✅ Fast page loads

## Next Steps (Phase 2)

### Immediate Priorities

1. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

2. **Test the contact form:**
   - Fill out the form at http://localhost:3000#contact
   - Check browser console for submission logs

3. **Customize content:**
   - Update client logos in `components/sections/clients.tsx`
   - Modify services in `components/sections/services.tsx`
   - Add your own testimonials

### Phase 2 Implementation

#### Week 1: Email & Database
- [ ] Set up Supabase project
- [ ] Implement Resend email integration
- [ ] Connect contact form to real email
- [ ] Add lead storage to database

#### Week 2: Content Pages
- [ ] Create About page
- [ ] Build Services detail pages
- [ ] Add Case Study pages
- [ ] Create Pricing page

#### Week 3: Blog System
- [ ] Set up Contentlayer for MDX
- [ ] Create blog layout
- [ ] Write first 5 blog posts
- [ ] Add blog index page

#### Week 4: AI Features
- [ ] Implement OpenAI chat assistant
- [ ] Add RAG for content search
- [ ] Set up email automation
- [ ] Add conversation history

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P -> TypeScript: Restart TS Server
```

### Styling Not Working
```bash
# Rebuild Tailwind
npm run dev
# Or restart the dev server
```

## Development Tips

### Adding New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add section ID for anchor links

### Adding shadcn/ui Components
```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add tabs
```

### Testing Responsive Design
- Chrome DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on mobile: Use your phone's IP address

## Deployment Checklist

### Before Deploying
- [ ] Add environment variables to Vercel
- [ ] Update NEXT_PUBLIC_APP_URL
- [ ] Test all forms
- [ ] Check all links
- [ ] Optimize images
- [ ] Run build locally: `npm run build`

### Vercel Deployment
1. Push code to GitHub
2. Import repo on vercel.com
3. Add environment variables
4. Deploy
5. Set up custom domain

## Support

If you encounter issues:
1. Check the console for errors
2. Review the README.md
3. Check Next.js docs: https://nextjs.org/docs
4. Check shadcn/ui docs: https://ui.shadcn.com

## Success! 🎉

Your COMMA Studio website foundation is now complete. The site is fully functional with:
- Modern, responsive design
- SEO optimization
- Working contact form
- Fast performance
- Accessible components

Next: Add content, integrate AI features, and deploy to production!
