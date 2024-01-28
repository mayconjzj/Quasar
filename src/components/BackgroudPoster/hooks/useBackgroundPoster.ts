import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export const useBackgroundPoster = () => {
  const { data: results, isLoading } = useQuery({
    queryKey: ['backgroundPoster'],
    queryFn: () =>
      api.get('/trending/all/week', {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: 'pt-BR',
          page: 1
        }
      })
  });

  const backgroundPoster =
    results?.results[Math.floor(Math.random() * results?.results.length)];

  return { backgroundPoster, isLoading };
};
