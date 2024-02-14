import { fetchGenres, fetchMediaByGenre, fetchTrending } from './api-calls';

export async function fetchCollection(mediaType: string) {
  const [dataTrendings, dataCategories] = await Promise.all([
    fetchTrending(mediaType),
    fetchGenres(mediaType)
  ]);

  const reelsAndCategories = await Promise.all(
    dataCategories.genres.map(async (category) => {
      const mediaContent = await fetchMediaByGenre(mediaType, category.id);
      return {
        id: category.id,
        name: category.name,
        media: mediaContent.results
      };
    })
  );

  const trendingMedia = dataTrendings.results.map((contentInfo) => contentInfo);

  return [
    { id: 1, name: 'Destaques', media: trendingMedia },
    ...reelsAndCategories
  ];
}
