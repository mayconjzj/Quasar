import { api } from '@/services/api';

import { Genres, MediaType } from '@/models';

export const fetchGenre = async ({ mediaType }: MediaType) => {
  const response = (await api.get({
    endpoint: `/genre/${mediaType ?? 'movie'}/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`,
    cache: 'default'
  })) as Genres;

  return response;
};