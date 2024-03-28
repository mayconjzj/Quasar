import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { Suspense } from 'react';

import { fetchTrending } from '@/services/http/ApiCalls';
import { fetchTopRated } from '@/services/http/TopRatedApi';

import { Button } from '@/components/ui/Button';
import { List } from '@/components/ui/List';
import { MediaBackdrop } from '@/components/ui/MediaBackdrop';
import { MediaPoster } from '@/components/ui/MediaPoster';
import { Skeleton } from '@/components/ui/Skeleton';

import { createArray } from '@/utils/createArray';
import { firstDateYear } from '@/utils/FirstDateYear';

export default function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <article className="h-[85vh] relative w-full text-foreground">
            <Skeleton className="w-full h-full" />
          </article>
        }
      >
        <TopRated />
      </Suspense>
      <Suspense
        fallback={
          <section className="px-2 md:px-[30px]">
            <div className="w-full my-[30px]">
              {createArray(10).map((i) => (
                <>
                  <Skeleton key={i} className="w-[225px] h-8" />
                  <List.Root className="flex overflow-auto">
                    {createArray(10).map((i) => (
                      <List.Item key={i} className="min-w-[150px] h-[225px]">
                        <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                      </List.Item>
                    ))}
                  </List.Root>
                </>
              ))}
            </div>
          </section>
        }
      >
        <Collection />
      </Suspense>
    </main>
  );
}

const TopRated = async () => {
  noStore();
  const bet = Math.random() > 0.5;
  const mediaType = bet ? 'movie' : 'tv';

  const topRated = await fetchTopRated(mediaType);

  return (
    <article className="h-[85vh] relative w-full p-2 md:px-[30px] text-foreground">
      <MediaBackdrop dataTopRated={topRated} />
      <div className="absolute inset-0 bg-gradient-to-b to-background/100 from-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/100 to-transparent" />

      <div className="absolute flex flex-col gap-3 h-full justify-end md:justify-center">
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
            {topRated.first_air_date && firstDateYear(topRated.first_air_date)}
          </div>
          <div>
            {topRated.runtime > 0 && `${topRated.runtime} minutos`}
            {topRated.number_of_seasons > 0 &&
              `${topRated.number_of_seasons} temporadas`}
          </div>
        </div>

        <p className="max-w-[600px] line-clamp-3">{topRated.overview}</p>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={`/discover/${mediaType}/${topRated.id}`}>Detalhes</Link>
          </Button>
        </div>
        <div>
          <span className="font-bold">Gêneros: </span>
          <span className="text-muted-foreground">
            {topRated.genres?.map((genre) => genre.name).join(', ')}{' '}
          </span>
        </div>
      </div>
    </article>
  );
};

const Collection = async () => {
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
