import { PaginationLinks } from '@/app/search/PaginationLinks';
import { fetchSearch } from '@/services/http/ApiCalls';

import { NotResults } from './notResults';
import { Results } from './results';

export type SearchProps = {
  searchParams: {
    query: string;
    page: string;
  };
};

export const generateMetadata = ({ searchParams }: SearchProps) => {
  return {
    title: `Pesquisa ${searchParams.query || ''}`,
    description: `${searchParams.query && `Procurando no Quasar por: ${searchParams.query}`}`
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
        {searchResults.results.length === 0 && <NotResults />}
        {searchResults.results.map((result) => (
          <Results result={result} key={result.id} />
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
