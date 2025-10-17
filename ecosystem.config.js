module.exports = {
  apps: [
    {
      name: 'commastudio',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/var/www/commastudio',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
    },
  ],
}
