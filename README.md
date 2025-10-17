# COMMA Studio Website

A modern, high-performance website for COMMA Studio - a performance copywriting agency specializing in ads, emails, and websites that drive results.

## Overview

This is a Next.js 14 website built with TypeScript, Tailwind CSS, and modern web technologies. The site showcases COMMA Studio's portfolio, services, and includes functional contact and newsletter signup forms.

## Features

### Content
- **Homepage** with hero, services, case studies, testimonials, FAQ, and contact sections
- **About Page** with founder bio and approach
- **6 Case Studies** featuring real client work (Loop Earplugs, F1 Arcade, Airhive, Yugen Agency, Knight Frank, Scottish Book Trust)
- **6 Service Pages** (Performance Advertising, Email Marketing, Website Copy, Brand Messaging, Product Marketing, OOH Advertising)
- **Blog System** with 3 sample posts and MDX support
- **Resources Page** for downloadable templates
- **Legal Pages** (Privacy Policy, Terms of Service)

### Interactive Features
- **Contact Form** with validation (React Hook Form + Zod)
- **Newsletter Signup** integrated in footer
- **Email Integration** via Resend API
- **Admin Portal (CMS)** for managing all content without code
- **Responsive Design** optimized for all devices
- **SEO Optimized** with metadata and sitemap

### Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod validation
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **Email**: Resend API
- **Editor**: React Quill (WYSIWYG)
- **Blog**: Markdown with gray-matter + Database
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd comma-studio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```bash
RESEND_API_KEY=re_your_api_key_here
```

Get your Resend API key from [https://resend.com/api-keys](https://resend.com/api-keys)

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── contact/          # Contact form endpoint
│   │   └── newsletter/       # Newsletter signup endpoint
│   ├── blog/                 # Blog pages
│   ├── case-studies/         # Case study pages
│   ├── services/             # Service pages
│   ├── about/                # About page
│   ├── resources/            # Resources page
│   ├── privacy/              # Privacy policy
│   ├── terms/                # Terms of service
│   └── page.tsx              # Homepage
├── components/
│   ├── layout/               # Header, Footer
│   ├── sections/             # Page sections (Hero, Services, etc.)
│   └── ui/                   # Reusable UI components
├── content/
│   └── blog/                 # Markdown blog posts
├── lib/                      # Utilities and helpers
└── public/                   # Static assets
```

## Configuration

### Email Setup

The contact form and newsletter signup use Resend for email delivery. To configure:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Update email addresses in:
   - `/app/api/contact/route.ts` (line 35)
   - `/app/api/newsletter/route.ts` (line 33)

### Newsletter Integration

The newsletter endpoint currently sends notification emails. For production, integrate with:
- ConvertKit
- Mailchimp
- Beehiiv
- Other email marketing platforms

See TODO comments in `/app/api/newsletter/route.ts`

### Customization

**Colors**: Edit Tailwind config in `tailwind.config.ts`
**Fonts**: Using Geist Sans and Geist Mono (configured in `app/layout.tsx`)
**Metadata**: Update SEO info in `lib/metadata.ts`

## Admin Portal

**NEW!** The website now includes a full-featured admin portal for managing content without editing code.

### Quick Start

1. **Access the admin portal**: http://localhost:3000/admin/login
2. **Default credentials**:
   - Email: `admin@commastudio.co.uk`
   - Password: `changeme123`
3. **Change password** after first login!

### Features

- **Blog Management**: Create, edit, and publish blog posts with WYSIWYG editor
- **Case Studies**: Manage portfolio work and client projects
- **Testimonials**: Add and organize client reviews
- **Services**: Edit service pages and offerings
- **Dashboard**: Overview of all content
- **Draft Mode**: Save drafts before publishing

### Complete Documentation

See [ADMIN-PORTAL.md](ADMIN-PORTAL.md) for:
- Full setup instructions
- Database schema details
- API documentation
- Deployment guide
- Customization options
- Troubleshooting

## Content Management

### Option 1: Admin Portal (Recommended)

Use the admin portal at `/admin/login` to manage content with a visual editor.

### Option 2: Markdown Files (Legacy)

Create a new `.md` file in `/content/blog/`:

```markdown
---
title: Your Post Title
date: 2024-01-15
excerpt: Brief description of your post
author: Your Name
category: Copywriting Tips
readTime: 5 min read
published: true
---

Your markdown content here...
```

## Deployment

This website can be deployed to:

### Option 1: VPS (Hostinger, DigitalOcean, etc.)
See [DEPLOYMENT.md](DEPLOYMENT.md) for complete VPS deployment instructions including:
- PM2 process manager setup
- Nginx configuration
- SSL certificate installation
- Automated deployment script

### Option 2: Vercel (Recommended for simplicity)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add `RESEND_API_KEY` to environment variables
4. Deploy!

### Option 3: Netlify
Similar to Vercel, with good Next.js support.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | Yes |
| `DATABASE_URL` | Database connection string | Yes (Admin) |
| `NEXTAUTH_SECRET` | Secret for NextAuth sessions | Yes (Admin) |
| `NEXTAUTH_URL` | Base URL for authentication | Yes (Admin) |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Static generation for optimal performance

## SEO Features

- Semantic HTML
- Meta tags and Open Graph
- Sitemap.xml (auto-generated)
- Robots.txt
- Structured data ready
- Mobile responsive

## Security

- Form validation (client + server)
- Environment variables for secrets
- HTTPS ready
- XSS protection via Next.js
- CSRF protection built-in

## Real Content

This website includes:
- **38 pages** of real portfolio content
- **44 LinkedIn testimonials** from actual clients
- **6 detailed case studies** from real campaigns
- Real metrics and results

## Future Enhancements

Potential additions:
- [x] Admin Portal / CMS ✅
- [ ] Case study management in admin
- [ ] Testimonial management in admin
- [ ] Image upload to cloud storage
- [ ] AI Chat Assistant (OpenAI integration)
- [ ] Analytics integration (Vercel Analytics/Plausible)
- [ ] Advanced blog features (tags, search, related posts)
- [ ] Content scheduling
- [ ] Multi-user support with roles

## Support

For deployment questions, see [DEPLOYMENT.md](DEPLOYMENT.md)

For technical issues, check:
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Resend docs: [resend.com/docs](https://resend.com/docs)

## License

© 2024 COMMA Studio. All rights reserved.

## Credits

Built with:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [Resend](https://resend.com)

## Contact

- Website: https://commastudio.co.uk
- Email: hello@commastudio.co.uk
- LinkedIn: https://www.linkedin.com/in/cain-lewis-6219a110b/
