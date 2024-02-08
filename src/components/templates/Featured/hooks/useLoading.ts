import { useEffect, useState } from 'react';

import { loadFeatured } from '@/services/http';

import { FeaturedInfo, MediaType } from '@/models';

export const useFeatured = ({ mediaType }: MediaType) => {
  const [featured, setFeatured] = useState<FeaturedInfo>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async ({ mediaType }: MediaType) => {
    try {
      setIsLoading(true);
      const data = await loadFeatured({ mediaType });
      setFeatured(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ mediaType });
  }, [mediaType]);

  return { featured, isLoading };
};
