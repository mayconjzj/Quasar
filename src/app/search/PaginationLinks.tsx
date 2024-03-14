import React from 'react';

import { Pagination } from '@/components/ui/Pagination';

import { getPageLink } from '@/utils/GetPageLink';

type PaginationLinksProps = {
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
