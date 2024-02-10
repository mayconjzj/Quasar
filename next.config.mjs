/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**'
      }
    ],
    deviceSizes: [320, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    disableStaticImages: false
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
