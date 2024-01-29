'use client';

import { useFeatured } from './hooks/useFeatured';

export const Featured = () => {
  const { featured, isLoading } = useFeatured();

  return (
    <section>
      {isLoading && <p>Loading...</p>}
      <div>{featured?.title || featured?.name}</div>
    </section>
  );
};
