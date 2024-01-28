import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

import { Reels } from '@/models/Reels';

export const useCatalogList = () => {
  const { data: results, isLoading } = useQuery<Reels>({
    queryKey: ['catalogList'],
    queryFn: () =>
      api.get('/trending/all/week', {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: 'pt-BR',
          page: 1
        }
      })
  });

  const reels = results?.results.map((obj) => {
    return { ...obj, title: obj.name || obj.original_name };
  });

  return { reels, isLoading };
};
