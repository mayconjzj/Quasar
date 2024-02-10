import { api } from '@/services/api';

import { MediaType, Reels } from '@/models';

type LoadReels = {
  withGenres?: number;
} & MediaType;

export const loadReels = async ({ mediaType, withGenres }: LoadReels) => {
  const reels = (await api.get({
    endpoint: `/discover/${mediaType ?? 'movie'}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${withGenres}&language=pt-BR`,
    cache: 'no-store'
  })) as Reels;

  return reels;
};
