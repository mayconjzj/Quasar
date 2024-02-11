import { api } from '@/services/api';

import { MediaType, ContentInfo } from '@/models';

type FetchContentInfo = {
  id?: number;
} & MediaType;

export const fetchContentInfo = async ({ mediaType, id }: FetchContentInfo) => {
  const contentInfo = (await api.get({
    endpoint: `/${mediaType ?? 'movie'}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`,
    cache: 'no-store'
  })) as ContentInfo;

  return contentInfo;
};
