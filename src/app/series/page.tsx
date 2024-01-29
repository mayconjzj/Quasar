import { Catalog } from '@/components/templates/Catalog';
import { Featured } from '@/components/templates/Featured';

export default function Home() {
  return (
    <main>
      <Featured mediaType="tv" />
      <Catalog mediaType="tv" />
    </main>
  );
}
