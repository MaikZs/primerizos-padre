/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/primerizos-padre',
    trailingSlash: true
};

export default nextConfig;
