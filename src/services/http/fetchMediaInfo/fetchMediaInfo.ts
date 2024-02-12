import { api } from '@/services/api';

import { MediaType, MediaInfo } from '@/models';

type FetchMediaInfo = {
  id: number;
} & MediaType;

export const fetchMediaInfo = async ({ mediaType, id }: FetchMediaInfo) => {
  const mediaInfo = (await api.get({
    endpoint: `/${mediaType ?? 'movie'}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`,
    cache: 'no-cache'
  })) as MediaInfo;

  return mediaInfo;
};
