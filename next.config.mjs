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
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/discover/movies',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
