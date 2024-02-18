import Link from 'next/link';

import { fetchSearch } from '@/services/http/ApiCalls';

import { PaginationLinks } from '@/components/PaginationLinks';
import { Button } from '@/components/ui/Button';
import { MediaPoster } from '@/components/ui/MediaPoster';
import { Pagination } from '@/components/ui/Pagination';
import { Skeleton } from '@/components/ui/Skeleton';

import { formatDate } from '@/lib/utils';

export type SearchProps = {
  searchParams: {
    query: string;
    page: string;
  };
};

export default async function Search({ searchParams }: SearchProps) {
  const searchResults = await fetchSearch(
    searchParams.query,
    searchParams.page
  );

  return (
    <main className="pt-[70px] pb-8 md:px-8 px-2 flex flex-col gap-4 max-w-[1200px] m-auto">
      <section className="w-full gap-4 flex flex-col">
        <h1 className="text-3xl font-black text-center">
          &quot;{searchParams.query}&quot; No Quasar
        </h1>
        <span className="font-bold">
          {searchResults.total_results} resultados para &quot;
          {searchParams.query}
          &quot;
        </span>
        {searchResults.results.length === 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="mt-8">Nenhum resultado encontrado</p>
            <Link href="/discover/movies">
              <Button>Voltar</Button>
            </Link>
          </div>
        )}
        {searchResults.results.map((result) => (
          <div
            key={result.id}
            className="flex gap-x-4 gap-y-2 rounded-xl overflow-hidden"
          >
            {result.poster_path && (
              <Link href={`/discover/${result.media_type}/${result.id}`}>
                <MediaPoster className="scale-100" media={result} />
              </Link>
            )}
            {!result.poster_path && (
              <Skeleton className="min-w-[150px] min-h-[225px]" />
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
                    {formatDate(
                      `${result.release_date || result.first_air_date}`
                    )}
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
                <div className="line-clamp-2 bottom-0 absolute font-semibold">
                  {result.overview}
                </div>
              )}
            </div>
          </div>
        ))}
        <Pagination.Root>
          <Pagination.Content>
            <PaginationLinks
              currentPage={searchResults.page}
              totalPages={searchResults.total_pages}
              endpoint={`/search?query=${searchParams.query}`}
            />
          </Pagination.Content>
        </Pagination.Root>
      </section>
    </main>
  );
}
