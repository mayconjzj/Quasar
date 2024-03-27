import Link from 'next/link';

import { fetchTrending } from '@/services/http/ApiCalls';

import { List } from '@/components/ui/List';
import { MediaPoster } from '@/components/ui/MediaPoster';
import { Skeleton } from '@/components/ui/Skeleton';

export const Collection = async () => {
  const [collectionMovies, collectionSeries] = await Promise.all([
    fetchTrending('movie'),
    fetchTrending('tv')
  ]);

  return (
    <section className="px-2 md:px-[30px]">
      {collectionMovies && (
        <div className="w-full my-[30px]">
          <h2 className="font-bold text-2xl">Filmes</h2>
          <List.Root className="overflow-x-auto flex">
            {collectionMovies.results.map((media) => (
              <List.Item key={media.id}>
                <Link href={`/discover/movie/${media.id}`}>
                  {media.poster_path && (
                    <MediaPoster
                      className="object-cover min-w-[150px] h-[225px] scale-90 hover:scale-100 duration-200"
                      alt={media.title || media.name}
                      posterPath={media.poster_path}
                    />
                  )}
                  {!media.poster_path && (
                    <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                  )}
                </Link>
              </List.Item>
            ))}
          </List.Root>
        </div>
      )}
      {collectionSeries && (
        <div className="w-full my-[30px]">
          <h2 className="font-bold text-2xl">Séries</h2>
          <List.Root className="overflow-x-auto flex">
            {collectionSeries.results.map((media) => (
              <List.Item key={media.id}>
                <Link href={`/discover/tv/${media.id}`}>
                  {media.poster_path && (
                    <MediaPoster
                      className="object-cover min-w-[150px] h-[225px] scale-90 hover:scale-100 duration-200"
                      alt={media.title || media.name}
                      posterPath={media.poster_path}
                    />
                  )}
                  {!media.poster_path && (
                    <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                  )}
                </Link>
              </List.Item>
            ))}
          </List.Root>
        </div>
      )}
    </section>
  );
};
