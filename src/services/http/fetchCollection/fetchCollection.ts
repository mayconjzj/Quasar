import { fetchGenre, fetchDiscover, fetchTrendings } from '..';

export const fetchCollection = async ({ mediaType }: { mediaType: string }) => {
  const [dataTrendings, dataCategories] = await Promise.all([
    fetchTrendings({ mediaType }),
    fetchGenre({ mediaType })
  ]);

  const reelsAndCategories = await Promise.all(
    dataCategories.genres.map(async (category) => {
      const mediaContent = await fetchDiscover({
        mediaType: mediaType,
        withGenres: category.id
      });

      return {
        id: category.id,
        name: category.name,
        media: mediaContent.results
      };
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
