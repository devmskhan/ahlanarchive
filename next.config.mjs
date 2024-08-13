/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.oceanofpdf.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;