'use client';

import Image from 'next/image';

import { Reels } from '@/components/ui/Reels';

import { MediaType } from '@/models';

import { Loading } from './components/Loading';
import { useCatalog } from './hooks/useCatalog';

export const Catalog = ({ mediaType }: MediaType) => {
  const { catalog, isLoading } = useCatalog({ mediaType });

  return (
    <section className="px-2 md:px-[30px]">
      {isLoading && <Loading />}

      {catalog?.map((category) => (
        <Reels.Root key={category.id}>
          <Reels.Title>{category.name}</Reels.Title>
          <Reels.Content>
            {category?.reels?.results.map((reel) => (
              <Image
                key={reel.id}
                className="scale-90 hover:scale-100 cursor-pointer duration-200"
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${reel.poster_path}`}
                alt={`${reel.title || reel.name} poster`}
                width={150}
                height={225}
                style={{ width: '150px', height: 'auto' }}
                priority
              />
            ))}
          </Reels.Content>
        </Reels.Root>
      ))}
    </section>
  );
};
