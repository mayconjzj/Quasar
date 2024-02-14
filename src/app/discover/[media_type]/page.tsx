import { fetchCollection, fetchTopRated } from '@/services';

import { Collection } from './collection';
import * as S from './styles';
import { TopRated } from './top-rated';

type DiscoverProps = {
  params: {
    media_type: string;
  };
};

export default async function Discover({ params }: DiscoverProps) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';
  const [topRated, dataCollection] = await Promise.all([
    fetchTopRated(mediaType),
    fetchCollection(mediaType)
  ]);

  return (
    <S.Container>
      <TopRated dataTopRated={topRated} mediaType={mediaType} />
      <Collection dataCollection={dataCollection} mediaType={mediaType} />
    </S.Container>
  );
}
