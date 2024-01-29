import { loadCatalog } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { Catalogs } from '@/models';

export const useCatalog = () => {
  const { data: catalog, isLoading } = useQuery<Catalogs>({
    queryKey: ['loadCatalog'],
    queryFn: () => loadCatalog(),
    staleTime: 7 * 24 * 60 * 60 * 1000 // 7 dias
  });

  return { catalog, isLoading };
};
