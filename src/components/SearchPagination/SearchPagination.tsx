import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '../ui/pagination';

type SearchPaginationProps = {
  total_pages: number;
  searchParams: { query: string; page: string };
};

export const SearchPagination = ({
  total_pages,
  searchParams
}: SearchPaginationProps) => {
  return (
    <Pagination className="flex justify-center my-4">
      <PaginationContent>
        {Number(searchParams.page) > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/search?query=${searchParams.query}&page=${Number(searchParams.page) - 1}`}
            />
          </PaginationItem>
        )}
        {Number(searchParams.page) > 1 && (
          <PaginationItem>
            <PaginationLink
              href={`/search?query=${searchParams.query}&page=${Number(searchParams.page) - 1}`}
            >
              {Number(searchParams.page) - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{searchParams.page}</PaginationLink>
        </PaginationItem>
        {Number(searchParams.page) < total_pages && (
          <PaginationItem>
            <PaginationLink
              href={`/search?query=${searchParams.query}&page=${Number(searchParams.page) + 1}`}
            >
              {Number(searchParams.page) + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {Number(searchParams.page) < total_pages && (
          <PaginationItem>
            <PaginationNext
              href={`/search?query=${searchParams.query}&page=${Number(searchParams.page) + 1}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
