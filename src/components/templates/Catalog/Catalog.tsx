import Image from 'next/image';
import { Suspense } from 'react';

import { loadCatalog } from '@/services/http';

import { Reels } from '@/components/ui/Reels';
import { Skeleton } from '@/components/ui/Skeleton';

import { MediaType } from '@/models';

export const Catalog = async ({ mediaType }: MediaType) => {
  const catalog = await loadCatalog({ mediaType });

  return (
    <section className="px-2 md:px-[30px]">
      <Suspense fallback={<Skeleton className="w-[200px] h-10" />}>
        {catalog.map((category) => (
          <Reels.Root key={category.id}>
            <Reels.Title>{category.name}</Reels.Title>
            <Reels.Content>
              {category.reels.results.map((reel) => (
                <Suspense
                  key={reel.id}
                  fallback={
                    <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                  }
                >
                  {reel.poster_path && (
                    <Image
                      className="scale-90 hover:scale-100 cursor-pointer duration-200 min-w-[150px]"
                      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w200${reel.poster_path}`}
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
