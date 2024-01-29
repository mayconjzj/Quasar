import { api } from '@/services/api';

import { MediaType } from '@/models';

export const loadReelInfo = async ({
  mediaType,
  id
}: {
  id: number;
} & MediaType) => {
  const reelInfo = await api.get(`/${mediaType ?? 'movie'}/${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: 'pt-BR'
    }
  });

  return reelInfo;
};