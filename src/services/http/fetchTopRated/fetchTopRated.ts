import { ContentInfo, MediaType } from '@/models';

import { fetchContentInfo, fetchTrendings } from '..';

export const fetchTopRated = async ({ mediaType }: MediaType) => {
  const dataTrendings = await fetchTrendings({ mediaType });

  const mediaRandom = (await fetchContentInfo({
    id: dataTrendings.results[
      Math.floor(Math.random() * dataTrendings.results.length)
    ].id as number,
    mediaType
  })) as ContentInfo;

  return mediaRandom;
};
