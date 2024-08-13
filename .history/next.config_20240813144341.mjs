/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.export = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.oceanofpdf.com',
                port: '',
                pathname
            }
        ]
    }
}
