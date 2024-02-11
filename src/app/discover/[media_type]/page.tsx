import Image from 'next/image';
import { Suspense } from 'react';

import { fetchCollection, fetchTopRated } from '@/services/http';

import { Button } from '@/components/Button';
import { MediaGallery } from '@/components/MediaGallery';
import { Skeleton } from '@/components/Skeleton';

import { firstDateYear } from '@/lib/utils';

export default async function Movies({
  params
}: {
  params: { media_type: string };
}) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';
  const dataCollection = await fetchCollection({ mediaType });
  const dataTopRated = await fetchTopRated({ mediaType });

  return (
    <main>
      <article className="h-[85vh]">
        <div className="relative w-full h-full">
          <Suspense fallback={<Skeleton className="w-full h-[85vh}" />}>
            <Image
              className="object-cover"
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w1280${dataTopRated?.backdrop_path}`}
              alt="dataTopRated Image"
              fill
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b to-black/100 from-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l to-black/100 from-transparent"></div>
            <div className="absolute flex flex-col gap-3 p-2 md:px-[30px] h-full justify-end md:justify-center">
              {dataTopRated?.title && (
                <div className="font-bold text-5xl">{dataTopRated.title}</div>
              )}
              {dataTopRated?.name && (
                <div className="font-bold text-5xl">{dataTopRated.name}</div>
              )}

              <div className="text-[18px] font-bold flex gap-3">
                {dataTopRated?.vote_average && (
                  <div>
                    {dataTopRated.vote_average}{' '}
                    <span className="text-[#46d369]">pontos</span>
                  </div>
                )}

                {dataTopRated?.release_date && (
                  <div>{firstDateYear(dataTopRated.release_date)}</div>
                )}
                {dataTopRated?.first_air_date && (
                  <div>{firstDateYear(dataTopRated.first_air_date)}</div>
                )}

                {dataTopRated?.number_of_seasons && (
                  <div>{dataTopRated.number_of_seasons} temporadas</div>
                )}

                {dataTopRated?.runtime && (
                  <div>{dataTopRated.runtime + ' minutos'}</div>
                )}
              </div>

              {dataTopRated?.overview && (
                <div className="max-w-[600px] text-[#aaa]">
                  {dataTopRated.overview.slice(0, 350)}
                  {dataTopRated.overview.length > 350 && '...'}
                </div>
              )}

              {dataTopRated && (
                <div className="flex gap-2">
                  <Button>Detalhes</Button>
                </div>
              )}

              {dataTopRated?.genres && (
                <div>
                  <span className="font-bold">Gêneros: </span>
                  <span className="text-[#aaa]">
                    {dataTopRated.genres.map((genre) => genre.name).join(', ')}{' '}
                  </span>
                </div>
              )}
            </div>
          </Suspense>
        </div>
      </article>

      <section className="px-2 md:px-[30px]">
        <Suspense fallback={<Skeleton className="w-[200px] h-10" />}>
          {dataCollection.map((category) => (
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
                    {!content.poster_path && (
                      <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                    )}
                  </Suspense>
                ))}
              </MediaGallery.Content>
            </MediaGallery.Root>
          ))}
        </Suspense>
      </section>
    </main>
  );
}
