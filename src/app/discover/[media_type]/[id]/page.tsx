import { fetchMediaDetails } from '@/services/http/ApiCalls';

import { MediaBackdrop } from '@/components/ui/MediaBackdrop';
import { MediaPoster } from '@/components/ui/MediaPoster';
import { Skeleton } from '@/components/ui/Skeleton';

import { firstDateYear } from '@/utils/FirstDateYear';

type MediaDetailsProps = {
  params: {
    id: number;
    media_type: string;
  };
};

export default async function MediaDetails({ params }: MediaDetailsProps) {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);
  const director = dataMediaInfo.credits?.crew.find(
    (crew) => crew.job === 'Director'
  );

  return (
    <main>
      <article className="h-[100vh] relative -z-10">
        <MediaBackdrop dataTopRated={dataMediaInfo} />
        <div className="absolute inset-0 bg-gradient-to-b to-background/100 from-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/100 to-transparent" />
      </article>
      <article className="p-2 md:px-[30px] space-y-3 -mt-[50vh]">
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
        {director && (
          <div>
            <span className="font-bold">Diretor: </span>
            <span className="text-muted-foreground">{director.name}</span>
          </div>
        )}
        {dataMediaInfo.credits.cast?.length > 0 && (
          <div>
            <h2 className="font-bold text-2xl">Elenco</h2>
            <ul className="flex gap-3 overflow-auto">
              {dataMediaInfo.credits.cast?.map((cast) => (
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
      </article>
    </main>
  );
}
