const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        published: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    console.log('\n📊 Blog Posts in Database:');
    console.log('═══════════════════════════════════════════════\n');
    console.log(`Total posts: ${posts.length}\n`);

    if (posts.length === 0) {
      console.log('❌ No blog posts found in database!\n');
    } else {
      posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}`);
        console.log(`   Slug: ${post.slug}`);
        console.log(`   Published: ${post.published ? '✅ Yes' : '❌ No'}`);
        console.log(`   Created: ${post.createdAt}`);
        console.log('');
      });
    }

    console.log('═══════════════════════════════════════════════\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

checkPosts();
