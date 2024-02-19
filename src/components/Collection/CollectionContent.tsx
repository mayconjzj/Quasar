import Link from 'next/link';

import { fetchCollection } from '@/services/http/CollectionApi';

import { List } from '@/components/ui/List';
import { MediaPoster } from '@/components/ui/MediaPoster';
import { Skeleton } from '@/components/ui/Skeleton';

export const CollectionContent = async ({
  mediaType
}: {
  mediaType: string;
}) => {
  const collection = await fetchCollection(mediaType);

  return (
    <section className="px-2 md:px-[30px]">
      {collection.map((genre) => (
        <div key={genre.id} className="w-full my-[30px]">
          <h2 className="font-bold text-2xl">{genre.name}</h2>
          <List.Root className="overflow-x-auto flex">
            {genre.media.map((media) => (
              <List.Item key={media.id}>
                <Link href={`/discover/${mediaType}/${media.id}`}>
                  {media.poster_path && <MediaPoster media={media} />}
                  {!media.poster_path && (
                    <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                  )}
                </Link>
              </List.Item>
            ))}
          </List.Root>
        </div>
      ))}
    </section>
  );
};
