import { Suspense } from 'react';

import { fetchMediaDetails } from '@/services/http/ApiCalls';

type MediaDetailsProps = {
  params: {
    id: number;
    media_type: string;
  };
};

export default async function MediaDetails({ params }: MediaDetailsProps) {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return (
    <main className="mt-[70px]">
      <article>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>{dataMediaInfo?.title || dataMediaInfo?.name}</h1>
            <p>{dataMediaInfo?.overview}</p>
          </Suspense>
        </div>
      </article>
    </main>
  );
}
