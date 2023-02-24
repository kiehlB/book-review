/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/:path*',
      },
    ];
  },
  env: {
    API_URL: process.env.API_URL,
    KAKAO: process.env.KAKAO,
  },
};

module.exports = nextConfig;
