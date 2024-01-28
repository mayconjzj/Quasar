import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

import { Categories } from '@/models/Categories';

export const useCategoryList = () => {
  const { data: results, isLoading } = useQuery<Categories>({
    queryKey: ['categoryList'],
    queryFn: () =>
      api.get('/genre/list', {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: 'pt-BR'
        }
      })
  });

  const categories = results?.genres;

  return { categories, isLoading };
};
