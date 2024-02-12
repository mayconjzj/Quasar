import Image from 'next/image';
import Link from 'next/link';

import { Skeleton } from '@/components/Skeleton';

import { cn, formatDate } from '@/lib/utils';

import { MediaResults } from '@/models';

export const SearchResultsItem = ({
  result,
  ...rest
}: {
  result: MediaResults['results'][0];
  className?: string;
}) => {
  return (
    <div key={result.id} className={cn('flex gap-x-4 gap-y-2', rest.className)}>
      {result.poster_path && (
        <Image
          className="cursor-pointer duration-200 min-w-[150px] rounded-xl"
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w200${result.poster_path}`}
          alt={`${result.title || result.name}`}
          width={150}
          height={225}
          unoptimized
          loading="lazy"
        />
      )}
      {!result.poster_path && (
        <Skeleton className="min-w-[150px] min-h-[225px]" />
      )}
      <div className="flex flex-col gap-1 relative w-full">
        <Link href={`/${result.media_type}/${result.id}`}>
          <h2 className="font-bold text-xl">{result.title || result.name}</h2>
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
          <div>
            <div className="line-clamp-2 bottom-0 absolute font-semibold">
              {result.overview}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
