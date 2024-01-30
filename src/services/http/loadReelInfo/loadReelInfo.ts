import { api } from '@/services/api';

import { MediaType } from '@/models';

export const loadReelInfo = async ({
  mediaType,
  id
}: {
  id: number;
} & MediaType) => {
  try {
    const reelInfo = await api.get(`/${mediaType ?? 'movie'}/${id}`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR'
      }
    });

    return reelInfo;
  } catch (error) {
    console.log('erro ao carregar informações do destaque', error);
  }
};
