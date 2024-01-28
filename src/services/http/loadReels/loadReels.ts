import { api } from '@/services/api';

export const loadReel = async ({
  mediaType = 'movie',
  id
}: {
  id: number;
  mediaType?: string;
}) => {
  const reel = await api.get(`/${mediaType}/${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: 'pt-BR'
    }
  });

  return reel;
};

export const loadReels = async ({
  mediaType = 'movie',
  withGenres
}: {
  withGenres?: number;
  mediaType?: string;
}) => {
  const reels = await api.get(`/discover/${mediaType}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      with_genres: withGenres,
      language: 'pt-BR'
    }
  });

  return reels;
};
