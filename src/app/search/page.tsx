import Link from 'next/link';

import { fetchSearch } from '@/services/http/fetchSearch';

import { Button } from '@/components/Button';
import { MediaPoster } from '@/components/MediaPoster';
import { Pagination } from '@/components/Pagination';
import { Skeleton } from '@/components/Skeleton';

import { formatDate } from '@/lib/utils';

import { SearchProps } from '@/models/Search';

import * as S from './styles';

export default async function Search({ searchParams }: SearchProps) {
  const dataSearch = await fetchSearch({
    query: searchParams.query,
    page: searchParams.page
  });

  return (
    <S.Container>
      <S.Content>
        <S.Title>&quot;{searchParams.query}&quot; No Quasar</S.Title>
        <span className="font-bold">
          {dataSearch.total_results} resultados para títulos
        </span>
        {dataSearch.results.length === 0 && (
          <S.NoResult>
            <S.NoResultContent>Nenhum resultado encontrado</S.NoResultContent>
            <Link href="/discover/movies">
              <Button>Voltar</Button>
            </Link>
          </S.NoResult>
        )}
        {dataSearch.results.map((result) => (
          <S.SearchResultsItem key={result.id}>
            {result.poster_path && <MediaPoster media={result} />}
            {!result.poster_path && (
              <Skeleton className="min-w-[150px] min-h-[225px]" />
            )}
            <S.Details>
              <Link href={`/${result.media_type}/${result.id}`}>
                <S.SubTitle>{result.title || result.name}</S.SubTitle>
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
                <S.VoteAverage>
                  <span className="font-semibold text-[12px]">Pontos</span>
                  <span className="font-bold text-xl">
                    {Math.round(result.vote_average * 10) / 10}
                  </span>
                </S.VoteAverage>
              )}
              {result.overview && <S.Overview>{result.overview}</S.Overview>}
            </S.Details>
          </S.SearchResultsItem>
        ))}
        <Pagination.Root>
          <Pagination.Content>
            <Pagination.Links
              currentPage={dataSearch.page}
              totalPages={dataSearch.total_pages}
              endpoint={`/search?query=${searchParams.query}`}
            />
          </Pagination.Content>
        </Pagination.Root>
      </S.Content>
    </S.Container>
  );
}
