import { fetchSearch } from '@/services/http/fetchSearch';

import { Pagination } from '@/components/Pagination';
import { PaginationLinks } from '@/components/PaginationLinks';
import { SearchResults } from '@/components/SearchResults';

import { SearchProps } from '@/models/Search';

import * as S from './styles';

export default async function Search({ searchParams }: SearchProps) {
  const dataSearch = await fetchSearch({
    query: searchParams.query,
    page: searchParams.page
  });

  return (
    <S.Container>
      <SearchResults.Root>
        <S.Title>&quot;{searchParams.query}&quot; No Quasar</S.Title>
        <span className="font-bold">
          {dataSearch.total_results} resultados para títulos
        </span>
        {dataSearch.results.length === 0 && <SearchResults.NoResult />}
        {dataSearch.results.map((result) => (
          <SearchResults.Item key={result.id} result={result} />
        ))}
        <Pagination.Root>
          <Pagination.Content>
            <PaginationLinks
              currentPage={dataSearch.page}
              totalPages={dataSearch.total_pages}
              query={searchParams.query}
            />
          </Pagination.Content>
        </Pagination.Root>
      </SearchResults.Root>
    </S.Container>
  );
}
