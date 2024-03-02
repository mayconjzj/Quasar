export type MediaCredit = {
  id: number;
  name: string;
  character: string;
  credit_id: string;
  profile_path: string;
};

export type MediaCredits = {
  id: number;
  cast: MediaCredit[];
  crew: MediaCredit[];
};
