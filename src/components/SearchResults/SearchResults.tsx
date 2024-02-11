import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { mediaContent } from '@/models';

import { Button } from '../Button';
import { Skeleton } from '../Skeleton';

export const SearchResults = ({ data }: { data: mediaContent }) => {
  return (
    <div className="w-full flex flex-wrap justify-evenly">
      {data.results.length === 0 && (
        <div className="flex flex-col items-center gap-2">
          <p className="mt-8">Nenhum resultado encontrado</p>
          <Link href="/movies">
            <Button>Voltar</Button>
          </Link>
        </div>
      )}
      {data.results.map((result) => (
        <Suspense
          fallback={<Skeleton className="w-[150px] h-[225px] scale-90" />}
          key={result.id}
        >
          <Image
            className="scale-90 hover:scale-100 cursor-pointer duration-200 min-w-[150px]"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w200${result.poster_path}`}
            alt={`${result.title || result.name}`}
            width={150}
            height={225}
            unoptimized
            loading="lazy"
          />
        </Suspense>
      ))}
    </div>
  );
};
