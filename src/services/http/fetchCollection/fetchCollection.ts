import { fetchGenre, fetchDiscover, fetchTrendings } from '..';

export const fetchCollection = async ({ mediaType }: { mediaType: string }) => {
  const dataTrendings = await fetchTrendings({ mediaType });
  const dataCategories = await fetchGenre({ mediaType });

  const reelsAndCategories = await Promise.all(
    dataCategories.genres.map(async (category) => {
      const mediaContent = await fetchDiscover({
        mediaType: mediaType,
        withGenres: category.id
      });

      return { ...category, media: mediaContent.results };
    })
  );

  const catalogList = [
    {
      id: 1,
      name: 'Destaques da semana',
      media: dataTrendings.results.map((contentInfo) => contentInfo)
    },
    ...reelsAndCategories
  ];

  return catalogList;
};
