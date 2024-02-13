import { fetchCollection, fetchTopRated } from '@/services/http';

import { Collection } from '@/components/Collection';
import { TopRated } from '@/components/TopRated';

import * as S from './styles';
export default async function Discover({
  params
}: {
  params: { media_type: string };
}) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';
  const dataTopRated = await fetchTopRated({ mediaType });
  const dataCollection = await fetchCollection({ mediaType });

  return (
    <S.Container>
      <TopRated dataTopRated={dataTopRated} />
      <Collection dataCollection={dataCollection} />
    </S.Container>
  );
}
