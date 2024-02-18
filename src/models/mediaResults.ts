import { MediaInfo } from './MediaInfo';

export type MediaResults = {
  page: number;
  results: MediaInfo[];
  total_pages: number;
  total_results: number;
};
