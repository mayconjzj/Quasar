'use client';

import { useFeatured } from './hooks/useFeatured';

export const Featured = () => {
  const { featured, isLoading } = useFeatured();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {<h1>{featured?.title || featured?.name}</h1>}
    </div>
  );
};
