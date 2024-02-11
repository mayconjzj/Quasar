import { ContentInfo } from '..';

export type mediaContent = {
  page: number;
  results: ContentInfo[];
  total_pages: number;
  total_results: number;
};
