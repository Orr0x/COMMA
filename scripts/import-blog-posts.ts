/**
 * Import Blog Posts from Markdown Files to Database
 *
 * This script reads markdown files from content/blog/ and imports them into the database.
 * Run with: npx ts-node scripts/import-blog-posts.ts
 */

import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const prisma = new PrismaClient()

interface BlogFrontmatter {
  title: string
  date: string
  excerpt: string
  category: string
  readTime: string
  author: string
  published: boolean
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

async function importBlogPosts() {
  try {
    console.log('🚀 Starting blog post import...\n')

    const contentDir = path.join(process.cwd(), 'content', 'blog')

    // Check if directory exists
    if (!fs.existsSync(contentDir)) {
      console.error('❌ Error: content/blog directory not found')
      process.exit(1)
    }

    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'))

    if (files.length === 0) {
      console.log('⚠️  No markdown files found in content/blog/')
      process.exit(0)
    }

    console.log(`📁 Found ${files.length} markdown files\n`)

    let imported = 0
    let skipped = 0
    let errors = 0

    for (const file of files) {
      const filePath = path.join(contentDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')

      // Parse frontmatter and content
      const { data, content } = matter(fileContents)
      const frontmatter = data as BlogFrontmatter

      // Generate slug from filename (remove .md extension)
      const slug = file.replace('.md', '')

      console.log(`📝 Processing: ${frontmatter.title}`)
      console.log(`   Slug: ${slug}`)

      // Check if post already exists
      const existing = await prisma.blogPost.findUnique({
        where: { slug }
      })

      if (existing) {
        console.log(`   ⏭️  Skipped (already exists)\n`)
        skipped++
        continue
      }

      try {
        // Create blog post in database
        await prisma.blogPost.create({
          data: {
            title: frontmatter.title,
            slug: slug,
            excerpt: frontmatter.excerpt,
            content: content.trim(), // Store the markdown content
            author: frontmatter.author,
            category: frontmatter.category,
            readTime: frontmatter.readTime,
            published: frontmatter.published ?? true,
            createdAt: frontmatter.date ? new Date(frontmatter.date) : new Date(),
            updatedAt: new Date(),
          }
        })

        console.log(`   ✅ Imported successfully\n`)
        imported++
      } catch (error) {
        console.log(`   ❌ Error importing: ${error}\n`)
        errors++
      }
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📊 Import Summary:')
    console.log(`   ✅ Imported: ${imported}`)
    console.log(`   ⏭️  Skipped: ${skipped}`)
    console.log(`   ❌ Errors: ${errors}`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    if (imported > 0) {
      console.log('🎉 Blog posts imported successfully!')
      console.log('   You can now manage them through the admin portal at /admin/dashboard/blog\n')
    }

  } catch (error) {
    console.error('❌ Error during import:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the import
importBlogPosts()
