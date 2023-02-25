/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/v2/auth/register',
        destination: 'https://api.bookreview.pro/api/v2/auth/register',
      },
    ];
  },
  env: {
    API_URL: process.env.API_URL,
    KAKAO: process.env.KAKAO,
  },
};

module.exports = nextConfig;
