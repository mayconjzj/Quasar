import Image from 'next/image';
import { Suspense } from 'react';

import { Button } from '@/components/Button';
import { Skeleton } from '@/components/Skeleton';

import { firstDateYear } from '@/lib/utils';

import { ContentInfo } from '@/models';

export const TopRatedPost = async ({ topRated }: { topRated: ContentInfo }) => {
  return (
    <article className="h-[85vh]">
      <div className="relative w-full h-full">
        <Suspense fallback={<Skeleton className="w-full h-[85vh}" />}>
          <Image
            className="object-cover"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w1280${topRated?.backdrop_path}`}
            alt="topRated Image"
            fill
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b to-black/100 from-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l to-black/100 from-transparent"></div>
          <div className="absolute flex flex-col gap-3 p-2 md:px-[30px] h-full justify-end md:justify-center">
            {topRated?.title && (
              <div className="font-bold text-5xl">{topRated.title}</div>
            )}
            {topRated?.name && (
              <div className="font-bold text-5xl">{topRated.name}</div>
            )}

            <div className="text-[18px] font-bold flex gap-3">
              {topRated?.vote_average && (
                <div>
                  {topRated.vote_average}{' '}
                  <span className="text-[#46d369]">pontos</span>
                </div>
              )}

              {topRated?.release_date && (
                <div>{firstDateYear(topRated.release_date)}</div>
              )}
              {topRated?.first_air_date && (
                <div>{firstDateYear(topRated.first_air_date)}</div>
              )}

              {topRated?.number_of_seasons && (
                <div>{topRated.number_of_seasons} temporadas</div>
              )}

              {topRated?.runtime && <div>{topRated.runtime + ' minutos'}</div>}
            </div>

            {topRated?.overview && (
              <div className="max-w-[600px] text-[#aaa]">
                {topRated.overview.slice(0, 350)}
                {topRated.overview.length > 350 && '...'}
              </div>
            )}

            {topRated && (
              <div className="flex gap-2">
                <Button>Detalhes</Button>
              </div>
            )}

            {topRated?.genres && (
              <div>
                <span className="font-bold">Gêneros: </span>
                <span className="text-[#aaa]">
                  {topRated.genres.map((genre) => genre.name).join(', ')}{' '}
                </span>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </article>
  );
};
