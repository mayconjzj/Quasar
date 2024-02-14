import { fetchSearch } from '@/services/http/fetchSearch';

import { Pagination } from '@/components/Pagination';

import { SearchProps } from '@/models/Search';

import { NoResults } from './NoResults';
import { SearchResults } from './SearchResults';
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
          {dataSearch.total_results} resultados para &quot;{searchParams.query}
          &quot;
        </span>

        <NoResults results={dataSearch.results} />
        <SearchResults results={dataSearch.results} />

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
