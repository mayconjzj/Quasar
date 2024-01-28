import { api } from '@/services/api';

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
