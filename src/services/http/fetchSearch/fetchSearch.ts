import { api } from '@/services/api';

import { mediaContent } from '@/models';

export const fetchSearch = async ({ query }: { query: string }) => {
  const response = (await api.get({
    endpoint: `/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&language=pt-BR`,
    cache: 'no-cache'
  })) as mediaContent;

  return response;
};
