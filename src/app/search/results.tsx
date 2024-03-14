import Link from 'next/link';

import { MediaPoster } from '@/components/ui/MediaPoster';
import { Skeleton } from '@/components/ui/Skeleton';

import { formatDate } from '@/utils/FormatDate';

export type ResultsProps = {
  result: {
    id: number;
    media_type: string;
    poster_path: string;
    title: string;
    name: string;
    overview: string;
    release_date: string;
    first_air_date: string;
    vote_average: number;
  };
};

export const Results = ({ result }: ResultsProps) => {
  return (
    <div
      key={result.id}
      className="flex gap-x-4 gap-y-2 rounded-xl overflow-hidden"
    >
      {result.poster_path && (
        <Link href={`/discover/${result.media_type}/${result.id}`}>
          <MediaPoster
            className="min-w-[150px] min-h-[225px] scale-100"
            alt={result.title || result.name}
            posterPath={result.poster_path}
          />
        </Link>
      )}
      {!result.poster_path && (
        <Skeleton className="min-w-[150px] min-h-[225px] scale-100" />
      )}
      <div className="flex flex-col gap-1 h-[200px] m-auto relative w-full">
        <Link href={`/discover/${result.media_type}/${result.id}`}>
          <h2 className="font-bold text-xl line-clamp-1">
            {result.title || result.name}
          </h2>
        </Link>
        {result.release_date ||
          (result.first_air_date && (
            <span className="font-light">
              {formatDate(`${result.release_date || result.first_air_date}`)}
            </span>
          ))}
        {result.vote_average && (
          <div className="border-[1px] border-foreground w-16 h-16 rounded-xl flex flex-col items-center justify-center">
            <span className="font-semibold text-[12px]">Pontos</span>
            <span className="font-bold text-xl">
              {Math.round(result.vote_average * 10) / 10}
            </span>
          </div>
        )}
        {result.overview && (
          <div className="line-clamp-2 bottom-0 absolute">
            {result.overview}
          </div>
        )}
      </div>
    </div>
  );
};
