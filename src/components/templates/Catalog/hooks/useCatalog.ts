import { loadCategories, loadReels, loadTrending } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { Catalogs, Category, Reel, Reels } from '@/models';

// Carrega as categorias e os reels de cada categoria
const loadCatalog = async () => {
  const trendings = await loadTrending();
  const categories = await loadCategories({
    mediaType: 'movie'
  });

  const reelsAndCategories = await Promise.all(
    categories.genres.map(async (category: Category) => {
      const reels: Reels = await loadReels({
        mediaType: 'movie',
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
};

export const useCatalog = () => {
  const { data: catalog, isLoading } = useQuery<Catalogs>({
    queryKey: ['loadCatalog'],
    queryFn: () => loadCatalog(),
    staleTime: 7 * 24 * 60 * 60 * 1000 // 7 dias
  });

  return { catalog, isLoading };
};
