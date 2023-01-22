/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/v2/auth/register',
        destination: 'https://api.bookreview.pro/api/v2/auth/register',
      },
    ];
  },
};

module.exports = nextConfig;
