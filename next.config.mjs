/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/primerizos-padre',
    trailingSlash: true,
    assetPrefix: '/primerizos-padre/',
    // Agrega esta configuración para manejar las imágenes
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
        });
        return config;
    },
};

export default nextConfig;
