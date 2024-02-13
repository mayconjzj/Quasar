import { fetchSearch } from '@/services/http/fetchSearch';

import { Pagination } from '@/components/Pagination';
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
      <S.Content>
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
