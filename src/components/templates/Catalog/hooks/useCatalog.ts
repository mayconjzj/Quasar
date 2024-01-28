import { loadCategories, loadReels } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { Catalogs, Category, Reels } from '@/models';

// Carrega as categorias e os reels de cada categoria
const loadCatalog = async () => {
  const categories = await loadCategories({
    mediaType: 'movie'
  });

  const response = await Promise.all(
    categories.genres.map(async (category: Category) => {
      const reels: Reels = await loadReels({
        mediaType: 'movie',
        withGenres: category.id
      });

      return { ...category, reels: reels };
    })
  );

  return response;
};

export const useCatalog = () => {
  const { data: catalog, isLoading } = useQuery<Catalogs>({
    queryKey: ['loadCatalog'],
    queryFn: () => loadCatalog(),
    staleTime: 7 * 24 * 60 * 60 * 1000 // 7 dias
  });

  return { catalog, isLoading };
};
