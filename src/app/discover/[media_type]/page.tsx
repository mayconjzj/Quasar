import { Suspense } from 'react';

import { Collection } from '@/components/Collection';
import { TopRated } from '@/components/TopRated';

type DiscoverProps = {
  params: {
    media_type: string;
  };
};

export default async function Discover({ params }: DiscoverProps) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';

  return (
    <main>
      <Suspense fallback={<TopRated.Loading />}>
        <TopRated.Content mediaType={mediaType} />
      </Suspense>
      <Suspense fallback={<Collection.Loading />}>
        <Collection.Content mediaType={mediaType} />
      </Suspense>
    </main>
  );
}
