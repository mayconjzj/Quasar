import Link from 'next/link';

import { fetchSearch } from '@/services/http/ApiCalls';

import { Button } from '@/components/ui/Button';
import { MediaPoster } from '@/components/ui/MediaPoster';
import { Pagination } from '@/components/ui/Pagination';
import { Skeleton } from '@/components/ui/Skeleton';

import { formatDate } from '@/utils/FormatDate';
import { getPageLink } from '@/utils/GetPageLink';

export type SearchProps = {
  searchParams: {
    query: string;
    page: string;
  };
};

export const generateMetadata = ({ searchParams }: SearchProps) => {
  return {
    title: `Pesquisa ${searchParams.query || ''}`,
    description: `${searchParams.query && `Procurando no Quasar por: ${searchParams.query}`}`,
    openGraph: {
      title: `Pesquisa ${searchParams.query || ''}`,
      description: `${searchParams.query && `Procurando no Quasar por: ${searchParams.query}`}`
    },
    twitter: {
      title: `Pesquisa ${searchParams.query || ''}`,
      description: `${searchParams.query && `Procurando no Quasar por: ${searchParams.query}`}`
    }
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
        <span className="font-medium">
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
                <div className="line-clamp-2 bottom-0 absolute">
                  {result.overview}
                </div>
              )}
            </div>
          </div>
        ))}
        <PaginationLinks
          currentPage={searchResults.page}
          totalPages={searchResults.total_pages}
          endpoint={`/search?query=${searchParams.query}`}
        />
      </section>
    </main>
  );
}

export type PaginationLinksProps = {
  currentPage: number;
  totalPages: number;
  endpoint: string;
};

export const PaginationLinks: React.FC<PaginationLinksProps> = ({
  currentPage,
  totalPages,
  endpoint
}) => {
  const links = [];

  const addPageLink = (pageNumber: number, text: string | number) => {
    links.push(
      <Pagination.Item key={pageNumber}>
        <Pagination.Link
          href={getPageLink(endpoint, pageNumber)}
          isActive={currentPage === pageNumber}
        >
          {text}
        </Pagination.Link>
      </Pagination.Item>
    );
  };

  if (currentPage > 1) {
    links.push(
      <Pagination.Item key="prev">
        <Pagination.Previous
          className="hidden sm:flex"
          href={getPageLink(endpoint, currentPage - 1)}
        />
      </Pagination.Item>
    );
  }

  if (currentPage > 2) {
    addPageLink(1, 1);
    if (currentPage > 3) {
      links.push(<span key="ellipsis1">...</span>);
    }
  }

  if (currentPage > 1) {
    addPageLink(currentPage - 1, currentPage - 1);
  }

  addPageLink(currentPage, currentPage);

  if (currentPage < totalPages) {
    addPageLink(currentPage + 1, currentPage + 1);
  }

  if (currentPage < totalPages - 1) {
    if (currentPage < totalPages - 2) {
      links.push(<span key="ellipsis2">...</span>);
    }
    addPageLink(totalPages, totalPages);
  }

  if (currentPage < totalPages) {
    links.push(
      <Pagination.Item key="next">
        <Pagination.Next
          className="hidden sm:flex"
          href={getPageLink(endpoint, currentPage + 1)}
        />
      </Pagination.Item>
    );
  }

  return (
    <Pagination.Root>
      <Pagination.Content>{links}</Pagination.Content>
    </Pagination.Root>
  );
};
