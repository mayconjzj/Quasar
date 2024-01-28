import { useState } from 'react';

import { loadHomeList } from '@/services/http/tmdb';
import { useQuery } from '@tanstack/react-query';

import { Catalogs } from '@/models';

export const useCatalog = () => {
  const [mediaType] = useState('movie');

  const { data: catalog, isLoading } = useQuery<Catalogs>({
    queryKey: ['loadHomeList'],
    queryFn: () => loadHomeList({ mediaType })
  });

  return { catalog, isLoading };
};
