/**
 * Quick admin user creation
 * Run with: node create-admin-quick.js
 */

const bcrypt = require('bcryptjs');

const email = 'admin@commastudio.co.uk';
const password = 'Admin123!'; // Change this to your preferred password
const name = 'Admin';

bcrypt.hash(password, 12, (err, hash) => {
  if (err) {
    console.error('Error:', err);
    process.exit(1);
  }

  console.log('\n=================================');
  console.log('Admin User - Copy this SQL to Supabase');
  console.log('=================================\n');

  const sql = `
INSERT INTO "User" (id, email, password, name, "emailVerified", "createdAt", "updatedAt")
VALUES (
  gen_random_uuid(),
  '${email}',
  '${hash}',
  '${name}',
  NOW(),
  NOW(),
  NOW()
);
  `;

  console.log(sql);

  console.log('\n=================================');
  console.log('Login Credentials');
  console.log('=================================');
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('=================================\n');
  console.log('⚠️  Change the password after first login!\n');
});
