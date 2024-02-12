import { api } from '@/services/api';

import { Categories, MediaType } from '@/models';

export const fetchCategories = async ({ mediaType }: MediaType) => {
  const response = (await api.get({
    endpoint: `/genre/${mediaType ?? 'movie'}/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`,
    cache: 'default'
  })) as Categories;

  return response;
};
