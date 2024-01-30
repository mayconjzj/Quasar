import { useEffect } from 'react';

import { loadCatalog } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { Catalogs, MediaType } from '@/models';

export const useCatalog = ({ mediaType }: MediaType) => {
  const {
    data: catalog,
    isLoading,
    refetch
  } = useQuery<Catalogs>({
    queryKey: ['catalog'],
    queryFn: () => loadCatalog({ mediaType }),
    enabled: false
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { catalog, isLoading };
};
