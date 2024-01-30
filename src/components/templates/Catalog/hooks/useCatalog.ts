import { useEffect } from 'react';
import { useState } from 'react';

import { loadCatalog } from '@/services/http';

import { Catalogs, MediaType } from '@/models';

export const useCatalog = ({ mediaType }: MediaType) => {
  const [catalog, setCatalog] = useState<Catalogs>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async ({ mediaType }: MediaType) => {
    try {
      setIsLoading(true);
      const data = await loadCatalog({ mediaType });
      setCatalog(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ mediaType });
  }, [mediaType]);

  return { catalog, isLoading };
};
