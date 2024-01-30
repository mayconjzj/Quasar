import { loadCatalog } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { Catalogs, MediaType } from '@/models';

export const useCatalog = ({ mediaType }: MediaType) => {
  const { data: catalog, isLoading } = useQuery<Catalogs>({
    queryKey: ['catalog'],
    queryFn: () => loadCatalog({ mediaType })
  });

  return { catalog, isLoading };
};
