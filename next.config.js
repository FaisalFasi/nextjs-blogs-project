/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "www.pexels.com",
      "images.unsplash.com",
      "media.istockphoto.com",
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};

module.exports = nextConfig;
