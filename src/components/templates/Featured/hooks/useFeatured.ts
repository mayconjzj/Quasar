import { loadFeatured } from '@/services/http';

import { MediaType } from '@/models';

export const useFeatured = async ({ mediaType }: MediaType) => {
  const res = await loadFeatured({ mediaType });
  return res;
};
