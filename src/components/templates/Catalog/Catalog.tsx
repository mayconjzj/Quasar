'use client';

import Image from 'next/image';

import { Reels } from '@/components/ui/Reels';
import { Skeleton } from '@/components/ui/Skeleton/Skeleton';

import { MediaType } from '@/models';

import { useCatalog } from './hooks/useCatalog';

export const Catalog = ({ mediaType }: MediaType) => {
  const { catalog, isLoading } = useCatalog({ mediaType });
  const repetitions = Array.from({ length: 10 });

  return (
    <section className="px-2 md:px-[30px]">
      {isLoading && (
        <>
          {repetitions.map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Skeleton className=" w-[200px] h-10" />
              <div className="flex items-center gap-2 overflow-auto">
                {repetitions.map((_, i) => (
                  <Skeleton key={i} className="min-w-[150px] h-[225px] " />
                ))}
              </div>
            </div>
          ))}
        </>
      )}

      {catalog?.map((category) => (
        <Reels.Root key={category.id}>
          <Reels.Title>{category.name}</Reels.Title>
          <Reels.Content>
            {category?.reels?.results.map((reel) => (
              <Image
                key={reel.id}
                className="scale-90 hover:scale-100 cursor-pointer duration-200"
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${reel.poster_path}`}
                alt={`${reel.title} poster`}
                width={150}
                height={225}
                priority
              />
            ))}
          </Reels.Content>
        </Reels.Root>
      ))}
    </section>
  );
};
