import { ContentInfo } from '..';

export type Collection = {
  id: number;
  name: string;
  media: ContentInfo[];
};

export type Collections = Collection[];
