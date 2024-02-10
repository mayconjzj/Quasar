import Image from 'next/image';
import { Suspense } from 'react';

import { loadCatalog } from '@/services/http';

import { Reels } from '@/components/ui/Reels';

import { MediaType } from '@/models';

import { LoadingCard, LoadingCategory } from './components/Loading';

export const Catalog = async ({ mediaType }: MediaType) => {
  const catalog = await loadCatalog({ mediaType });

  return (
    <section className="px-2 md:px-[30px]">
      <Suspense fallback={<LoadingCategory />}>
        {catalog.map((category) => (
          <Reels.Root key={category.id}>
            <Reels.Title>{category.name}</Reels.Title>
            <Reels.Content>
              {category.reels.results.map((reel) => (
                <Suspense key={reel.id} fallback={<LoadingCard />}>
                  {reel.poster_path && (
                    <Image
                      className="scale-90 hover:scale-100 cursor-pointer duration-200 min-w-[150px]"
                      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${reel.poster_path}`}
                      alt={`${reel.title || reel.name}`}
                      width={150}
                      height={225}
                      unoptimized
                      loading="lazy"
                    />
                  )}
                </Suspense>
              ))}
            </Reels.Content>
          </Reels.Root>
        ))}
      </Suspense>
    </section>
  );
};
