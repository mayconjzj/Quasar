import { loadCategories, loadReels } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { Catalogs, Category, Reels } from '@/models';

export const useCatalog = () => {
  const loadCatalog = async () => {
    const categories = await loadCategories({ mediaType: 'movie' });

    // Mapea as categorias e carrega os reels de cada categoria
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

  const { data: catalog, isLoading } = useQuery<Catalogs>({
    queryKey: ['loadCatalog'],
    queryFn: () => loadCatalog()
  });

  return { catalog, isLoading };
};
