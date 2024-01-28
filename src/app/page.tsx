import { Catalog } from '@/components/templates/Catalog';
import { Featured } from '@/components/templates/Featured';

export default function Home() {
  return (
    <main className="px-2 md:px-[30px]">
      <Featured />
      <Catalog />
    </main>
  );
}
