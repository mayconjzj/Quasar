import { MetadataRoute } from 'next';

import { fetchTrending } from '@/services/http/ApiCalls';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [];
  const { results: movies } = await fetchTrending('movie');
  const { results: series } = await fetchTrending('tv');

  sitemap.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    lastModified: new Date().toISOString()
  });

  sitemap.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/movies`,
    lastModified: new Date().toISOString()
  });

  sitemap.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/series`,
    lastModified: new Date().toISOString()
  });

  movies.forEach((movie) => {
    sitemap.push({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/movie/${movie.id}`,
      lastModified: new Date().toISOString()
    });
  });

  series.forEach((series) => {
    sitemap.push({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/tv/${series.id}`,
      lastModified: new Date().toISOString()
    });
  });

  return sitemap;
}
