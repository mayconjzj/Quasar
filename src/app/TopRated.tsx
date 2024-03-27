import Link from 'next/link';

import { fetchTopRated } from '@/services/http/TopRatedApi';

import { Button } from '@/components/ui/Button';
import { MediaBackdrop } from '@/components/ui/MediaBackdrop';

import { firstDateYear } from '@/utils/FirstDateYear';

export const TopRated = async () => {
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
