'use client';

import { useFeaturedInfo } from './hooks/useFeaturedInfo';

export const Featured = () => {
  const { featured, isLoading } = useFeaturedInfo();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {<h1>{featured?.title || featured?.name}</h1>}
    </div>
  );
};
