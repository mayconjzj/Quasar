import { api } from '@/services/api';

export const loadTrending = async () => {
  const trendings = await api.get('/trending/all/week', {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: 'pt-BR',
      page: 1
    }
  });

  return trendings;
};
