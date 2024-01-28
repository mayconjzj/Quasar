'use client';

import Image from 'next/image';

import { Reels } from '@/components/Reels';

import { useCatalog } from './hooks/useCatalog';

export const Catalog = () => {
  const { catalog, isLoading } = useCatalog();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {catalog?.map((category) => (
        <Reels.Root key={category.id}>
          <Reels.Title>{category.name}</Reels.Title>
          <Reels.Content>
            {category.reels.results.map((reel) => (
              <Image
                key={reel.id}
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${reel.poster_path}`}
                alt={`${reel.title} poster`}
                width={200}
                height={300}
                priority
              />
            ))}
          </Reels.Content>
        </Reels.Root>
      ))}
    </>
  );
};
