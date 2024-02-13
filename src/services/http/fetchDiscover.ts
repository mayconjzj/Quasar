import { api } from '@/services/api';

import { MediaType, MediaResults } from '@/models';

type FetchDiscover = {
  withGenres?: number;
} & MediaType;

export const fetchDiscover = async ({
  mediaType,
  withGenres
}: FetchDiscover) => {
  const reels = (await api.get({
    endpoint: `/discover/${mediaType ?? 'movie'}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${withGenres}&language=pt-BR`,

    cache: 'no-cache'
  })) as MediaResults;

  return reels;
};
