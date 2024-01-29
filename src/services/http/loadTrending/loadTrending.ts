import { api } from '@/services/api';

import { MediaType } from '@/models';

export const loadTrending = async ({ mediaType }: MediaType) => {
  const trendings = await api.get(`/trending/${mediaType ?? 'movie'}/week`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: 'pt-BR',
      page: 1
    }
  });

  return trendings;
};