import { MediaType } from '@/models';

import { fetchMediaInfo, fetchTrendings } from '..';

export const fetchTopRated = async ({ mediaType }: MediaType) => {
  const dataTrendings = await fetchTrendings({ mediaType });

  const mediaRandom = await fetchMediaInfo({
    id: dataTrendings.results[
      Math.floor(Math.random() * dataTrendings.results.length)
    ].id as number,
    mediaType
  });

  return mediaRandom;
};
