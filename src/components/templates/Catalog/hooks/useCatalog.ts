// import { useEffect } from 'react';

import { loadCatalog } from '@/services/http';

import { MediaType } from '@/models';

// import { loadCatalog } from '@/services/http';
// import { useQuery } from '@tanstack/react-query';

// import { Catalogs, MediaType } from '@/models';

// export const useCatalog = ({ mediaType }: MediaType) => {
//   const {
//     data: catalog,
//     isLoading,
//     refetch
//   } = useQuery<Catalogs>({
//     queryKey: ['loadCatalog'],
//     queryFn: () => loadCatalog({ mediaType }),
//     enabled: false
//   });

//   useEffect(() => {
//     refetch();
//   }, [refetch]);

//   return { catalog, isLoading };
// };

export const useCatalog = async ({ mediaType }: MediaType) => {
  const res = await loadCatalog({ mediaType });
  return res;
};
