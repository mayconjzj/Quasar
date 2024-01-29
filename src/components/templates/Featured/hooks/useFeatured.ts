import { loadFeatured } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { FeaturedInfo } from '@/models';

export const useFeatured = () => {
  const { data: featured, isLoading } = useQuery<FeaturedInfo>({
    queryKey: ['featured'],
    queryFn: () => loadFeatured(),
    staleTime: 7 * 24 * 60 * 60 * 1000 // 7 dias
  });

  return { featured, isLoading };
};
