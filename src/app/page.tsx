import { Suspense } from 'react';

import { Collection } from './Collection';
import { LoadingCollection } from './LoadingCollection';
import { LoadingTopRated } from './LoadingTopRated';
import { TopRated } from './TopRated';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<LoadingTopRated />}>
        <TopRated />
      </Suspense>
      <Suspense fallback={<LoadingCollection />}>
        <Collection />
      </Suspense>
    </main>
  );
}
