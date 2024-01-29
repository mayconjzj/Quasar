'use client';

import { Button } from '@/components/ui/Button';

import { firstDateYear } from '@/lib/utils';

import { useFeatured } from './hooks/useFeatured';

export const Featured = () => {
  const { featured, isLoading } = useFeatured();

  return (
    <article
      className="h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${featured?.backdrop_path})`
      }}
    >
      {isLoading && <p>Loading...</p>}
      <div className="w-screen h-screen bg-gradient-to-b from-black/5 to-transparent/100">
        <div className="w-screen h-screen bg-gradient-to-l from-black/5 to-transparent/100">
          {featured && (
            <div className="flex flex-col gap-3 p-2 md:px-[30px] h-full justify-end md:justify-center">
              {featured?.title && (
                <div className="font-bold text-5xl">{featured.title}</div>
              )}
              {featured?.name && (
                <div className="font-bold text-5xl">{featured.name}</div>
              )}

              <div className="text-[18px] font-bold flex gap-3">
                {featured.vote_count && (
                  <div>
                    {featured.vote_average}{' '}
                    <span className="text-[#46d369]">pontos</span>
                  </div>
                )}

                {featured?.release_date && (
                  <div>{firstDateYear(featured.release_date)}</div>
                )}
                {featured?.first_air_date && (
                  <div>{firstDateYear(featured.first_air_date)}</div>
                )}

                {featured?.number_of_seasons && (
                  <div>{featured.number_of_seasons} temporadas</div>
                )}

                {featured?.runtime && (
                  <div>{featured.runtime + ' minutos'}</div>
                )}
              </div>
              {featured?.overview && (
                <div className="max-w-[600px] text-[#aaa]">
                  {featured.overview.slice(0, 350) + '...'}
                </div>
              )}

              <div className="flex gap-2">
                <Button>Detalhes</Button>
              </div>

              {featured?.genres && (
                <div>
                  <span className="font-bold">Gêneros: </span>
                  <span className="text-[#aaa]">
                    {featured.genres.map((genre) => genre.name).join(', ')}{' '}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
