import { Suspense } from 'react';

import { fetchMediaDetails } from '@/services/http/ApiCalls';

import { LoadingBackdrop } from './LoadingBackdrop';
import { LoadingCredits } from './LoadingCredits';
import { LoadingMediaDetails } from './LoadingMediaDetails';
import { LoadingMediaTrailers } from './LoadingMediaTrailers';
import { MediaBackdrop } from './MediaBackdrop';
import { MediaCredits } from './MediaCredits';
import { MediaDetails } from './MediaDetails';
import { MediaTrailers } from './MediaTrailers';

export type MediaInfoProps = {
  params: {
    id: number;
    media_type: string;
  };
};

export const generateMetadata = async ({ params }: MediaInfoProps) => {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return {
    title: `Detalhes ${dataMediaInfo.title || dataMediaInfo.name}`,
    description: dataMediaInfo.overview
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
        <Suspense fallback={<LoadingMediaTrailers />}>
          <MediaTrailers params={params} />
        </Suspense>
      </article>
    </main>
  );
}
