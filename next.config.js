/** @type {import('next').NextConfig} */


const nextConfig = process.env.ENVIRONMENT === 'local'
  ? {}
  : { output: 'export' }

module.exports = nextConfig
