import { api } from '@/services/api';

import { MediaType, Reels } from '@/models';

export const loadTrending = async ({ mediaType }: MediaType) => {
  const trendings = (await api.get({
    endpoint: `/trending/${mediaType ?? 'movie'}/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&page=1`,
    cache: 'no-store'
  })) as Reels;

  return trendings;
};
