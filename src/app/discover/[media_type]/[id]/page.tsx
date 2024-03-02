import { fetchMediaDetails } from '@/services/http/ApiCalls';

import { MediaBackdrop } from '@/components/ui/MediaBackdrop';

import { firstDateYear } from '@/utils/FirstDateYear';

type MediaDetailsProps = {
  params: {
    id: number;
    media_type: string;
  };
};

export default async function MediaDetails({ params }: MediaDetailsProps) {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return (
    <main>
      <article className="h-[80vh] relative">
        <MediaBackdrop dataTopRated={dataMediaInfo} />
        <div className="absolute inset-0 bg-gradient-to-b to-background/100 from-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </article>
      <article className="p-2 md:px-[30px] space-y-3">
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
        <p className="max-w-[600px] line-clamp-3">{dataMediaInfo.overview}</p>
        <div>
          <span className="font-bold">Gêneros: </span>
          <span className="text-muted-foreground">
            {dataMediaInfo.genres?.map((genre) => genre.name).join(', ')}{' '}
          </span>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Elenco</h2>
          <ul className="flex gap-3">
            <li>Cillian Murphy</li>
            <li>Samuel L. Jackson</li>
            <li>Mark Wahlberg</li>
            <li>Bill Paxton</li>
            <li>Tim Blake Nelson</li>
            <li>John C. Reilly</li>
            <li>Michael Caine</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
