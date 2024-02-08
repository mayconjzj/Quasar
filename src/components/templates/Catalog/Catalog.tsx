import Image from 'next/image';
import { Suspense } from 'react';

import { loadCatalog } from '@/services/http';

import { Reels } from '@/components/ui/Reels';

import { MediaType } from '@/models';

import { Loading } from './components/Loading';

export const Catalog = async ({ mediaType }: MediaType) => {
  const catalog = await loadCatalog({ mediaType });

  return (
    <section className="px-2 md:px-[30px]">
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </section>
  );
};
