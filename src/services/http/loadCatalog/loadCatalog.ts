import { Category, MediaType, Reel, Reels } from '@/models';

import { loadCategories, loadReels, loadTrending } from '..';

export const loadCatalog = async ({ mediaType }: MediaType) => {
  try {
    const trendings = await loadTrending({ mediaType: mediaType });
    const categories = await loadCategories({
      mediaType: mediaType
    });

    const reelsAndCategories = await Promise.all(
      categories.genres.map(async (category: Category) => {
        const reels: Reels = await loadReels({
          mediaType: mediaType,
          withGenres: category.id
        });

        return { ...category, reels: reels };
      })
    );

    const catalogList = [
      {
        id: 1,
        name: 'Recomendados para você',
        reels: { results: trendings.results.map((reel: Reel) => reel) }
      },
      ...reelsAndCategories
    ];

    return catalogList;
  } catch (error) {
    console.log('erro ao carregar catálogo', error);
  }
};
