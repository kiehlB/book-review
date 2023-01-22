/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'https://api.bookreview.pro/api',
      },
    ];
  },
};

module.exports = nextConfig;
