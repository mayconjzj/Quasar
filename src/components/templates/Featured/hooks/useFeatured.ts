import { loadFeatured } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { FeaturedInfo, MediaType } from '@/models';

export const useFeatured = ({ mediaType }: MediaType) => {
  const { data: featured, isLoading } = useQuery<FeaturedInfo>({
    queryKey: ['featured'],
    queryFn: () => loadFeatured({ mediaType })
  });

  return { featured, isLoading };
};
