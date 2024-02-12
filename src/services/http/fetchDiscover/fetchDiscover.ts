import { api } from '@/services/api';

import { MediaType, mediaContent } from '@/models';

type FetchMediaContent = {
  withGenres?: number;
} & MediaType;

export const fetchDiscover = async ({
  mediaType,
  withGenres
}: FetchMediaContent) => {
  const reels = (await api.get({
    endpoint: `/discover/${mediaType ?? 'movie'}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${withGenres}&language=pt-BR`,

    cache: 'no-cache'
  })) as mediaContent;

  return reels;
};
