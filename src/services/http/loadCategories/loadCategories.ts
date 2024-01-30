import { api } from '@/services/api';

import { MediaType } from '@/models';

export const loadCategories = async ({ mediaType }: MediaType) => {
  try {
    const response = await api.get(`/genre/${mediaType ?? 'movie'}/list`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'pt-BR'
      }
    });
    return response;
  } catch (error) {
    console.log('erro ao carregar categorias', error);
  }
};
