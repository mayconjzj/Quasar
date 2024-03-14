import { Suspense } from 'react';

import { LoadingBackdrop } from './LoadingBackdrop';
import { LoadingCredits } from './LoadingCredits';
import { LoadingMediaDetails } from './LoadingMediaDetails';
import { MediaBackdrop } from './MediaBackdrop';
import { MediaCredits } from './MediaCredits';
import { MediaDetails } from './MediaDetails';

export type MediaInfoProps = {
  params: {
    id: number;
    media_type: string;
  };
};

export default async function MediaInfo({ params }: MediaInfoProps) {
  return (
    <main>
      <Suspense fallback={<LoadingBackdrop />}>
        <MediaBackdrop params={params} />
      </Suspense>
      <article className="p-2 md:px-[30px] space-y-3 -mt-[50vh]">
        <Suspense fallback={<LoadingMediaDetails />}>
          <MediaDetails params={params} />
        </Suspense>
        <Suspense fallback={<LoadingCredits />}>
          <MediaCredits params={params} />
        </Suspense>
      </article>
    </main>
  );
}
