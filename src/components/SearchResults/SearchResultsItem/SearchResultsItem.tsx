import Image from 'next/image';
import Link from 'next/link';

import { Skeleton } from '@/components/Skeleton';

import { formatDate } from '@/lib/utils';

import { mediaContent } from '@/models';

export const SearchResultsItem = ({
  result
}: {
  result: mediaContent['results'][0];
}) => {
  return (
    <div
      className="flex gap-4 bg-[#111] border-none overflow-hidden rounded-lg max-h-[150px]"
      key={result.id}
    >
      {result.poster_path && (
        <Image
          className="cursor-pointer duration-200 min-w-[100px]"
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w200${result.poster_path}`}
          alt={`${result.title || result.name}`}
          width={100}
          height={150}
          unoptimized
          loading="lazy"
        />
      )}

      {!result.poster_path && <Skeleton className="min-w-[100px] h-[150px]" />}

      <div className="my-4 flex flex-col justify-between w-full overflow-hidden">
        <div>
          <Link href={`/${result.media_type}/${result.id}`}>
            <h2 className="font-bold">{result.title || result.name}</h2>
          </Link>

          {result.release_date ||
            (result.first_air_date && (
              <span className="text-gray-400">
                {formatDate(`${result.release_date || result.first_air_date}`)}
              </span>
            ))}
        </div>

        <div className="text-sm line-clamp-2">
          <p>{result.overview}</p>
        </div>
      </div>
    </div>
  );
};
