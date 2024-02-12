import { api } from '@/services/api';

import { MediaResults } from '@/models';

type FetchSearch = {
  query: string;
  page?: string;
};

export const fetchSearch = async ({ query, page = '1' }: FetchSearch) => {
  const response = (await api.get({
    endpoint: `/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&page=${page}&language=pt-BR`,
    cache: 'no-store'
  })) as MediaResults;

  const sorted = response.results.sort((a, b) => {
    if (a.popularity && b.popularity) {
      return b.popularity - a.popularity;
    }
    return 0;
  });

  return { ...response, results: sorted };
};
