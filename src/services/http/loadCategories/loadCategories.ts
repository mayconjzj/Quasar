import { api } from '@/services/api';

import { MediaType } from '@/models';

export const loadCategories = async ({ mediaType = 'movie' }: MediaType) => {
  const response = await api.get(`/genre/${mediaType}/list`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: 'pt-BR'
    }
  });
  return response;
};
