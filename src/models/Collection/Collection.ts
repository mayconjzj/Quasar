import { MediaInfo } from '..';

export type Collection = {
  id: number;
  name: string;
  media: MediaInfo[];
};

export type Collections = Collection[];
