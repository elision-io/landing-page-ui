/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  ...nextConfig,
};
