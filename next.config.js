/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['search1.kakaocdn.net'],
  },
  env: {
    API_URL: process.env.API_URL,
    KAKAO: process.env.KAKAO,
    NAVER_ID: process.env.NAVER_ID,
    NAVER_CALLBACK: process.env.NAVER_CALLBACK,
    GOOGLE_CALLBACK: process.env.GOOGLE_CALLBACK,
    KAKAO_CALLBACK: process.env.KAKAO_CALLBACK,
  },
};

module.exports = nextConfig;
