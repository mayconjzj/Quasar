import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/movie`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/series`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/search`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/movie`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/series`,
      lastModified: new Date().toISOString()
    }
  ];
}
