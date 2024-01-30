import { useEffect } from 'react';

import { loadFeatured } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { FeaturedInfo, MediaType } from '@/models';

export const useFeatured = ({ mediaType }: MediaType) => {
  const {
    data: featured,
    isLoading,
    refetch
  } = useQuery<FeaturedInfo>({
    queryKey: ['featured'],
    queryFn: () => loadFeatured({ mediaType }),
    enabled: false
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { featured, isLoading };
};
