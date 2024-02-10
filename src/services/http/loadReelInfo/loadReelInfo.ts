import { api } from '@/services/api';

import { MediaType, Reel } from '@/models';

type LoadReelInfo = {
  id: number;
} & MediaType;

export const loadReelInfo = async ({ mediaType, id }: LoadReelInfo) => {
  const reelInfo = (await api.get({
    endpoint: `/${mediaType ?? 'movie'}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`,
    cache: 'no-store'
  })) as Reel;

  return reelInfo;
};
