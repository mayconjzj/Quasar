import Link from 'next/link';

import { fetchCollection, fetchTopRated } from '@/services';

import { Button } from '@/components/ui/Button';
import { List } from '@/components/ui/List';
import { MediaBackdrop } from '@/components/ui/MediaBackdrop';
import { MediaPoster } from '@/components/ui/MediaPoster';
import { Skeleton } from '@/components/ui/Skeleton';

import { firstDateYear } from '@/lib/utils';

type DiscoverProps = {
  params: {
    media_type: string;
  };
};

export default async function Discover({ params }: DiscoverProps) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';
  const [topRated, collection] = await Promise.all([
    fetchTopRated(mediaType),
    fetchCollection(mediaType)
  ]);

  return (
    <main>
      <article className="h-[85vh] relative w-full text-foreground">
        <MediaBackdrop dataTopRated={topRated} />
        <div className="absolute inset-0 bg-gradient-to-b to-background/100 from-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/100 to-transparent" />

        <div className="absolute flex flex-col gap-3 p-2 md:px-[30px] h-full justify-end md:justify-center">
          <h1 className="font-bold text-5xl line-clamp-2">
            {topRated?.title || topRated?.name}
          </h1>
          <div className="text-[18px] font-bold flex gap-3">
            {topRated.vote_average > 0 && (
              <div>
                {Math.round(topRated.vote_average * 10) / 10}{' '}
                <span className="text-[#46d369]">pontos</span>
              </div>
            )}
            <div>
              {topRated.release_date && firstDateYear(topRated.release_date)}
              {topRated.first_air_date &&
                firstDateYear(topRated.first_air_date)}
            </div>
            <div>
              {topRated.runtime > 0 && `${topRated.runtime} minutos`}
              {topRated.number_of_seasons > 0 &&
                `${topRated.number_of_seasons} temporadas`}
            </div>
          </div>

          <p className="max-w-[600px] line-clamp-3">{topRated.overview}</p>
          <div className="flex gap-2">
            <Link href={`/discover/${mediaType}/${topRated.id}`}>
              <Button>Detalhes</Button>
            </Link>
          </div>
          <div>
            <span className="font-bold">Gêneros: </span>
            <span className="text-muted-foreground">
              {topRated.genres?.map((genre) => genre.name).join(', ')}{' '}
            </span>
          </div>
        </div>
      </article>
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
    </main>
  );
}
