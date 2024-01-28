export type Reel = {
  adult?: boolean;
  backdrop_path?: string;
  id: string;
  title?: string;
  name?: string;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  media_type?: string;
  gennre_ids?: number[];
  popularity?: number;
  release_date?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type Reels = {
  results: Reel[];
};
