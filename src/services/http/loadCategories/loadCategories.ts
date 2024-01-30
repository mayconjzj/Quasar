import { api } from '@/services/api';

import { Categories, MediaType } from '@/models';

export const loadCategories = async ({ mediaType }: MediaType) => {
  const response: Categories = await api.get(
    `/genre/${mediaType ?? 'movie'}/list`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR'
      }
    }
  );
  return response;
};
