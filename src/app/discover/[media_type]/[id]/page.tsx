import { Suspense } from 'react';

import { Skeleton } from '@/components/ui/Skeleton';

import { createArray } from '@/utils/createArray';

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
      <Suspense
        fallback={<div className="h-[100vh] relative -z-10 bg-black" />}
      >
        <MediaBackdrop params={params} />
      </Suspense>
      <article className="p-2 md:px-[30px] space-y-3 -mt-[50vh]">
        <Suspense
          fallback={
            <section className="space-y-3">
              <Skeleton className="w-96 h-14" />
              <div className="flex gap-3">
                {createArray(3).map((i) => (
                  <Skeleton className="w-24 h-8" key={i} />
                ))}
              </div>
              <Skeleton className="max-w-[1000px] h-4" />
              <Skeleton className="max-w-[800px] h-4" />
              <Skeleton className="w-60 h-6" />
            </section>
          }
        >
          <MediaDetails params={params} />
        </Suspense>
        <Suspense
          fallback={
            <section className="space-y-3">
              <Skeleton className="w-60 h-6" />
              <Skeleton className="w-24 h-8" />
              <div className="flex gap-3 overflow-auto">
                {createArray(10).map((i) => (
                  <Skeleton
                    className="min-w-[150px] h-[225px] scale-90"
                    key={i}
                  />
                ))}
              </div>
            </section>
          }
        >
          <MediaCredits params={params} />
        </Suspense>
      </article>
    </main>
  );
}
