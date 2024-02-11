import React from 'react';

import { Pagination } from '@/components/Pagination';

import { getPageLink } from '@/lib/utils';

type PaginationLinksProps = {
  currentPage: number;
  totalPages: number;
  query: string;
};

export const PaginationLinks: React.FC<PaginationLinksProps> = ({
  currentPage,
  totalPages,
  query
}) => {
  const links = [];

  const addPageLink = (pageNumber: number, text: string | number) => {
    links.push(
      <Pagination.Item key={pageNumber}>
        <Pagination.Link
          href={getPageLink(query, pageNumber)}
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
        <Pagination.Previous href={getPageLink(query, currentPage - 1)} />
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
        <Pagination.Next href={getPageLink(query, currentPage + 1)} />
      </Pagination.Item>
    );
  }

  return <>{links}</>;
};
