import { MediaType } from '@/models';

import { fetchCategories, fetchMediaContent, fetchTrendings } from '..';

export const fetchCollection = async ({ mediaType }: MediaType) => {
  const dataTrendings = await fetchTrendings({ mediaType });
  const dataCategories = await fetchCategories({ mediaType });

  const reelsAndCategories = await Promise.all(
    dataCategories.genres.map(async (category) => {
      const mediaContent = await fetchMediaContent({
        mediaType: mediaType,
        withGenres: category.id
      });

      return { ...category, media: mediaContent.results };
    })
  );

  const catalogList = [
    {
      id: 1,
      name: 'Recomendados para você',
      media: dataTrendings.results.map((contentInfo) => contentInfo)
    },
    ...reelsAndCategories
  ];

  return catalogList;
};
