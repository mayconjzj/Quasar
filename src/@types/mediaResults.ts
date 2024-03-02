import { MediaDetails } from './MediaDetails';

export type MediaResults = {
  page: number;
  results: MediaDetails[];
  total_pages: number;
  total_results: number;
};
