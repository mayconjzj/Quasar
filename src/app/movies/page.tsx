import { fetchCollection, fetchTopRated } from '@/services/http';

import { MediaCollection } from '@/components/MediaCollection';
import { TopRatedPost } from '@/components/TopRatedPost';

export default async function Movies() {
  const mediaType = 'movie';
  const dataCollection = await fetchCollection({ mediaType });
  const dataTopRated = await fetchTopRated({ mediaType });

  return (
    <main>
      <TopRatedPost topRated={dataTopRated} />
      <MediaCollection collection={dataCollection} />
    </main>
  );
}
