import { Suspense } from 'react';

import {
  fetchMediaCredits,
  fetchMediaDetails,
  fetchMediaTrailers
} from '@/services/http/ApiCalls';

import { MediaBackdrop as Backdrop } from '@/components/ui/MediaBackdrop';
import { MediaPoster } from '@/components/ui/MediaPoster';
import { Skeleton } from '@/components/ui/Skeleton';

import { createArray } from '@/utils/createArray';
import { firstDateYear } from '@/utils/FirstDateYear';

type MediaInfoProps = {
  params: {
    id: number;
    media_type: string;
  };
};

export const generateMetadata = async ({ params }: MediaInfoProps) => {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return {
    title: `Detalhes ${dataMediaInfo.title || dataMediaInfo.name}`,
    description: dataMediaInfo.overview,
    openGraph: {
      title: `Detalhes ${dataMediaInfo.title || dataMediaInfo.name}`,
      description: dataMediaInfo.overview,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w1280${dataMediaInfo.backdrop_path}`,
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      title: `Detalhes ${dataMediaInfo.title || dataMediaInfo.name}`,
      description: dataMediaInfo.overview,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/${dataMediaInfo.backdrop_path}`,
          width: 1200,
          height: 630
        }
      ]
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/${params.media_type}/${params.id}`
    }
  };
};

export default async function MediaInfo({ params }: MediaInfoProps) {
  return (
    <main>
      <Suspense
        fallback={<div className="h-[100vh] relative -z-10 bg-black" />}
      >
        <MediaBackdrop params={params} />
      </Suspense>
      <article className="p-2 md:px-[30px] space-y-3 -mt-[50vh]">
        <Suspense
          fallback={
            <section className="space-y-3">
              <Skeleton className="w-96 h-14" />
              <div className="flex gap-3">
                {createArray(3).map((i) => (
                  <Skeleton className="w-24 h-8" key={i} />
                ))}
              </div>
              <Skeleton className="max-w-[1000px] h-4" />
              <Skeleton className="max-w-[800px] h-4" />
              <Skeleton className="w-60 h-6" />
            </section>
          }
        >
          <MediaDetails params={params} />
        </Suspense>
        <Suspense
          fallback={
            <section className="space-y-3">
              <Skeleton className="w-60 h-6" />
              <Skeleton className="w-24 h-8" />
              <div className="flex gap-3 overflow-auto">
                {createArray(10).map((i) => (
                  <Skeleton
                    className="min-w-[150px] h-[225px] scale-90"
                    key={i}
                  />
                ))}
              </div>
            </section>
          }
        >
          <MediaCredits params={params} />
        </Suspense>
        <Suspense
          fallback={
            <section className="space-y-3">
              <Skeleton className="w-40 h-8" />
              <div className="flex gap-3 overflow-auto">
                {createArray(5).map((i) => (
                  <Skeleton className="min-w-[400px] h-[225px]" key={i} />
                ))}
              </div>
            </section>
          }
        >
          <MediaTrailers params={params} />
        </Suspense>
      </article>
    </main>
  );
}

const MediaBackdrop = async ({ params }: MediaInfoProps) => {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return (
    <article className="h-[100vh] relative -z-10">
      <Backdrop dataTopRated={dataMediaInfo} />
      <div className="absolute inset-0 bg-gradient-to-b to-background/100 from-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/100 to-transparent" />
    </article>
  );
};

const MediaDetails = async ({ params }: MediaInfoProps) => {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return (
    <section className="space-y-3">
      <h1 className="font-bold text-5xl">
        {dataMediaInfo.title || dataMediaInfo.name}
      </h1>
      <div className="text-[18px] font-bold flex gap-3">
        {dataMediaInfo.vote_average > 0 && (
          <div>
            {Math.round(dataMediaInfo.vote_average * 10) / 10}{' '}
            <span className="text-[#46d369]">pontos</span>
          </div>
        )}
        <div>
          {dataMediaInfo.release_date &&
            firstDateYear(dataMediaInfo.release_date)}
          {dataMediaInfo.first_air_date &&
            firstDateYear(dataMediaInfo.first_air_date)}
        </div>
        <div>
          {dataMediaInfo.runtime > 0 && `${dataMediaInfo.runtime} minutos`}
          {dataMediaInfo.number_of_seasons > 0 &&
            `${dataMediaInfo.number_of_seasons} temporadas`}
        </div>
      </div>
      <p className="max-w-[1000px]">{dataMediaInfo.overview}</p>
      <div>
        <span className="font-bold">Gêneros: </span>
        <span className="text-muted-foreground">
          {dataMediaInfo.genres?.map((genre) => genre.name).join(', ')}{' '}
        </span>
      </div>
    </section>
  );
};

const MediaCredits = async ({ params }: MediaInfoProps) => {
  const dataMediaCredits = await fetchMediaCredits(
    params.media_type,
    params.id
  );

  const director = dataMediaCredits?.crew.find(
    (crew) => crew.job === 'Director'
  );

  return (
    <section>
      {director && (
        <div>
          <span className="font-bold">Diretor: </span>
          <span className="text-muted-foreground">{director.name}</span>
        </div>
      )}
      {dataMediaCredits.cast?.length > 0 && (
        <div>
          <h2 className="font-bold text-2xl">Elenco</h2>
          <ul className="flex gap-3 overflow-auto">
            {dataMediaCredits.cast?.map((cast) => (
              <li key={cast.id}>
                <div className="relative min-w-[150px] h-[225px] scale-90 hover:scale-100 duration-200">
                  {cast.profile_path && (
                    <MediaPoster
                      className="object-cover"
                      alt={cast.name}
                      posterPath={cast.profile_path}
                    />
                  )}
                  {!cast.profile_path && (
                    <Skeleton className="min-w-[150px] h-[225px]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b to-background/100 from-transparent" />
                  <div className="p-2 text-center flex justify-center w-full absolute bottom-0 left-0">
                    <h3 className="font-bold">{cast.name}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

const MediaTrailers = async ({
  params
}: {
  params: { media_type: string; id: number };
}) => {
  const dataMediaTrailers = await fetchMediaTrailers(
    params.media_type,
    params.id
  );

  return (
    <section>
      {dataMediaTrailers?.results?.length > 0 && (
        <>
          <h2 className="font-bold text-2xl">
            {dataMediaTrailers?.results?.length > 1 ? 'Trailers' : 'Trailer'}
          </h2>
          <div className="flex gap-x-3 overflow-auto">
            {dataMediaTrailers?.results?.map((trailer) => (
              <div
                key={trailer.id}
                className="min-w-[400px] h-[225px] scale-95"
              >
                <iframe
                  className="w-full h-full aspect-video"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
