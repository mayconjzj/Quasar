export const getPageLink = (endpoint: string, page: number) =>
  `${endpoint}&page=${page}`;