/**
 * Admin User Creation Script
 *
 * This script creates an admin user in the database.
 * Run this script with: npm run seed:admin
 *
 * You can also customize the email and password by setting environment variables:
 * ADMIN_EMAIL=your@email.com ADMIN_PASSWORD=yourpassword npm run seed:admin
 */

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import * as readline from 'readline'

const prisma = new PrismaClient()

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Promisify readline question
function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

async function createAdminUser() {
  try {
    console.log('\n=================================')
    console.log('COMMA Studio - Admin User Setup')
    console.log('=================================\n')

    // Get email from environment variable or prompt
    let email = process.env.ADMIN_EMAIL
    if (!email) {
      email = await question('Enter admin email: ')
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error('❌ Invalid email format')
      process.exit(1)
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      const overwrite = await question(
        `\n⚠️  User with email ${email} already exists. Overwrite password? (yes/no): `
      )
      if (overwrite.toLowerCase() !== 'yes') {
        console.log('❌ Operation cancelled')
        process.exit(0)
      }
    }

    // Get password from environment variable or prompt
    let password = process.env.ADMIN_PASSWORD
    if (!password) {
      password = await question('Enter admin password (min 8 characters): ')
    }

    // Validate password strength
    if (password.length < 8) {
      console.error('❌ Password must be at least 8 characters long')
      process.exit(1)
    }

    // Get name
    let name = process.env.ADMIN_NAME
    if (!name) {
      name = await question('Enter admin name (optional, press Enter to skip): ')
      if (!name) {
        name = 'Admin'
      }
    }

    console.log('\n⏳ Creating admin user...')

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create or update user
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        password: hashedPassword,
        name,
        updatedAt: new Date(),
      },
      create: {
        email,
        password: hashedPassword,
        name,
        emailVerified: new Date(), // Mark as verified
      },
    })

    console.log('\n✅ Admin user created successfully!')
    console.log('\n=================================')
    console.log('Login Credentials')
    console.log('=================================')
    console.log(`Email:    ${user.email}`)
    console.log(`Name:     ${user.name || 'Not set'}`)
    console.log(`Password: ${password}`)
    console.log('=================================\n')
    console.log('⚠️  IMPORTANT: Store these credentials securely!')
    console.log('🔗 Login at: http://localhost:3000/admin/login\n')

  } catch (error) {
    console.error('\n❌ Error creating admin user:', error)
    process.exit(1)
  } finally {
    rl.close()
    await prisma.$disconnect()
  }
}

// Run the script
createAdminUser()
