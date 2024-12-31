/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Only if you're using the app directory
    turbo: false,
  },
};

module.exports = nextConfig;

