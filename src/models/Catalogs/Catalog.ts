import { Reel } from '..';

export type Catalog = {
  id: number;
  name: string;
  reels: {
    results: Reel[];
  };
};

export type Catalogs = Catalog[];
