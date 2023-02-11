/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  env: {
    API_URL: process.env.API_URL,
    KAKAO: process.env.KAKAO,
  },
};

module.exports = nextConfig;
