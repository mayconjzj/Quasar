import { fetchMediaDetails } from '@/services';

import * as S from './styles';

type MediaDetailsProps = {
  params: {
    id: number;
    media_type: string;
  };
};

export default async function MediaDetails({ params }: MediaDetailsProps) {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return (
    <S.Container>
      <article>
        <div>
          <h1>{dataMediaInfo?.title || dataMediaInfo?.name}</h1>
        </div>
      </article>
    </S.Container>
  );
}
