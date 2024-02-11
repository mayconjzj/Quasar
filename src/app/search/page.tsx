import { fetchSearch } from '@/services/http/fetchSearch';

import { Pagination } from '@/components/Pagination';
import { PaginationLinks } from '@/components/PaginationLinks';
import { SearchResults } from '@/components/SearchResults';

import { SearchProps } from '@/models/Search';

export default async function Search({ searchParams }: SearchProps) {
  const dataSearch = await fetchSearch({
    query: searchParams.query,
    page: searchParams.page
  });

  return (
    <main className="pt-[70px] px-8">
      <SearchResults.Root>
        {dataSearch.results.length === 0 && <SearchResults.NoResult />}

        {dataSearch.results.map((result) => (
          <SearchResults.Item key={result.id} result={result} />
        ))}
      </SearchResults.Root>

      <Pagination.Root className="my-8">
        <Pagination.Content>
          <PaginationLinks
            currentPage={dataSearch.page}
            totalPages={dataSearch.total_pages}
            query={searchParams.query}
          />
        </Pagination.Content>
      </Pagination.Root>
    </main>
  );
}
