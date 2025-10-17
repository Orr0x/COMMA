# Testing Checklist

## 🧪 Test Your Setup Locally

After creating the admin user in Supabase, follow these steps to test everything:

### 1. Start Development Server

```bash
cd "i:\COMMA Studio"
npm run dev
```

Wait for: `✓ Ready in X seconds`

---

### 2. Test Homepage

Visit: [http://localhost:3000](http://localhost:3000)

**Check:**
- [ ] Page loads without errors
- [ ] All sections appear (Hero, Services, Testimonials, Contact)
- [ ] Navigation works
- [ ] No console errors (F12 → Console)

---

### 3. Test Admin Protection

**Without logging in**, try to access:
[http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

**Expected:** Should redirect to `/admin/login` ✅

**If it doesn't redirect:** Middleware isn't working

---

### 4. Test Admin Login

Visit: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

**Login with:**
- Email: `admin@commastudio.co.uk`
- Password: `Admin123!`

**Expected:**
- Should redirect to `/admin/dashboard` ✅
- You should see the admin dashboard

**If login fails:** Check that:
- Admin user was created in Supabase (check User table)
- Database connection is working
- NEXTAUTH_SECRET is set in .env

---

### 5. Test Creating Blog Post

In admin dashboard:

1. Click **"Blog"**
2. Click **"New Post"**
3. Fill in:
   - Title: "Test Post"
   - Slug: "test-post"
   - Content: "This is a test"
   - Excerpt: "Test excerpt"
   - Author: "Admin"
   - Category: "Testing"
   - Read Time: "1 min"
4. Check **"Published"**
5. Click **"Create Post"**

**Expected:**
- Success message ✅
- Post appears in blog list

**Verify in Supabase:**
- Go to Table Editor → BlogPost
- Your test post should be there

---

### 6. Test AI Tools

Go to: `/admin/dashboard/ai-tools`

**Test Blog Generator:**
1. Click **"Blog Generator"**
2. Enter:
   - Topic: "Benefits of content marketing"
   - Target audience: "Small business owners"
   - Tone: Professional
   - Length: Short
3. Click **"Generate"**

**Expected:**
- Loading state appears
- AI generates blog post (30-60 seconds)
- Content appears in editor
- Can copy/use the content

**If it fails:**
- Check ANTHROPIC_API_KEY in .env
- Check API key is valid in Anthropic console
- Check rate limits (20/hour)

---

### 7. Test Contact Form Email

On homepage:
1. Scroll to **Contact** section
2. Fill in:
   - Name: "Test User"
   - Email: "test@example.com"
   - Company: "Test Co"
   - Message: "This is a test message"
3. Click **"Send Message"**

**Expected:**
- Success message appears
- Email arrives at `hello@commastudio.co.uk`

**Check your email inbox!**

**If email doesn't arrive:**
- Check RESEND_API_KEY in .env
- Check Resend dashboard for errors
- Verify "from" email is verified in Resend

---

## ✅ Success Criteria

Everything is working when:

- [ ] Homepage loads correctly
- [ ] Admin routes are protected (redirect to login)
- [ ] Can log in with admin credentials
- [ ] Can create/edit blog posts
- [ ] Data saves to Supabase (check Table Editor)
- [ ] AI tools generate content
- [ ] Contact form sends emails
- [ ] No console errors

---

## 🐛 Common Issues

### "Can't connect to database"
- Check DATABASE_URL in .env and .env.local
- Verify Supabase project is active (not paused)
- Try the Transaction pooler URL

### "Authentication not working"
- Check NEXTAUTH_SECRET is set
- Check admin user exists in Supabase User table
- Clear browser cookies and try again

### "AI tools error"
- Check ANTHROPIC_API_KEY is correct
- Verify key in Anthropic console
- Check rate limits

### "Email not sending"
- Check RESEND_API_KEY is correct
- Verify sender email in Resend dashboard
- Check Resend logs for errors

---

## 📝 Next Steps After Testing

Once everything works locally:

1. ✅ **Rotate API keys** (see [SECURITY.md](./SECURITY.md))
2. ✅ **Deploy to Vercel** (see [PRODUCTION-DEPLOYMENT.md](./PRODUCTION-DEPLOYMENT.md))
3. ✅ **Create production admin user**
4. ✅ **Add content** (blog posts, case studies, testimonials)

---

**Good luck with testing! 🚀**
