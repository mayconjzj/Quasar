import { api } from '@/services/api';

import { MediaType } from '@/models';

export const loadReels = async ({
  mediaType,
  withGenres
}: {
  withGenres?: number;
} & MediaType) => {
  const reels = await api.get(`/discover/${mediaType ?? 'movie'}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      with_genres: withGenres,
      language: 'pt-BR'
    }
  });

  return reels;
};
