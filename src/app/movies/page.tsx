import { loadFeatured } from '@/services/http';

import { Catalog } from '@/components/templates/Catalog';
import { Featured } from '@/components/templates/Featured';

export default async function Home() {
  const data = await getFeatured();

  return (
    <main>
      <Featured data={data} />
      <Catalog mediaType="movie" />
    </main>
  );
}

const getFeatured = async () => {
  const res = await loadFeatured({ mediaType: 'movie' });
  return res;
};
