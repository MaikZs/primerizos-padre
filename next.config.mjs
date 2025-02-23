/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/primerizos-padre',
  assetPrefix: '/primerizos-padre/',
};

export default nextConfig;

