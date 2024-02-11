import Image from 'next/image';
import { Suspense } from 'react';

import { MediaGallery } from '@/components/MediaGallery';
import { Skeleton } from '@/components/Skeleton';

import { Collections } from '@/models';

export const MediaCollection = async ({
  collection
}: {
  collection: Collections;
}) => {
  return (
    <section className="px-2 md:px-[30px]">
      <Suspense fallback={<Skeleton className="w-[200px] h-10" />}>
        {collection.map((category) => (
          <MediaGallery.Root key={category.id}>
            <MediaGallery.Title>{category.name}</MediaGallery.Title>
            <MediaGallery.Content>
              {category.media.map((content) => (
                <Suspense
                  key={content.id}
                  fallback={
                    <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                  }
                >
                  {content.poster_path && (
                    <Image
                      className="scale-90 hover:scale-100 cursor-pointer duration-200 min-w-[150px]"
                      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w200${content.poster_path}`}
                      alt={`${content.title || content.name}`}
                      width={150}
                      height={225}
                      unoptimized
                      loading="lazy"
                    />
                  )}
                </Suspense>
              ))}
            </MediaGallery.Content>
          </MediaGallery.Root>
        ))}
      </Suspense>
    </section>
  );
};
