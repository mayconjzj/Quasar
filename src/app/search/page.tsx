import { fetchSearch } from '@/services/http/fetchSearch';

import { SearchPagination } from '@/components/SearchPagination';
import { SearchResults } from '@/components/SearchResults';

import { SearchProps } from '@/models/Search';

export default async function Search({ searchParams }: SearchProps) {
  const dataSearch = await fetchSearch({
    query: searchParams.query,
    page: searchParams.page
  });

  return (
    <main className="pt-12 px-8">
      <h1 className="text-2xl font-bold">
        Resultados da buascar por: {searchParams.query}
      </h1>
      <SearchResults data={dataSearch} />

      <SearchPagination
        total_pages={dataSearch.total_pages}
        searchParams={searchParams}
      />
    </main>
  );
}
