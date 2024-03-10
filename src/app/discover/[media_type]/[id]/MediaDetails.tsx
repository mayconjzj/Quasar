import { fetchMediaDetails } from '@/services/http/ApiCalls';

import { firstDateYear } from '@/utils/FirstDateYear';

import { MediaInfoProps } from './page';

export const MediaDetails = async ({ params }: MediaInfoProps) => {
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
