import { Suspense } from 'react';

import { Collection } from './Collection';
import { LoadingCollection } from './LoadingCollection';
import { LoadingTopRated } from './LoadingTopRated';
import { TopRated } from './TopRated';

type DiscoverProps = {
  params: {
    media_type: string;
  };
};

export const generateMetadata = ({ params }: DiscoverProps) => {
  const mediaType = params.media_type === 'series' ? 'Séries' : 'Filmes';

  return {
    title: `${mediaType}`,
    description: `Catalágo de ${mediaType}. Veja os ${mediaType} em destaque no Quasar.`
  };
};

export default async function Discover({ params }: DiscoverProps) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';

  return (
    <main>
      <Suspense fallback={<LoadingTopRated />}>
        <TopRated mediaType={mediaType} />
      </Suspense>
      <Suspense fallback={<LoadingCollection />}>
        <Collection mediaType={mediaType} />
      </Suspense>
    </main>
  );
}
