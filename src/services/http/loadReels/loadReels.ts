import { api } from '@/services/api';

import { MediaType } from '@/models';

export const loadReelInfo = async ({
  mediaType = 'movie',
  id
}: {
  id: number;
} & MediaType) => {
  const reelInfo = await api.get(`/${mediaType}/${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: 'pt-BR'
    }
  });

  return reelInfo;
};

export const loadReels = async ({
  mediaType = 'movie',
  withGenres
}: {
  withGenres?: number;
} & MediaType) => {
  const reels = await api.get(`/discover/${mediaType}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      with_genres: withGenres,
      language: 'pt-BR'
    }
  });

  return reels;
};
