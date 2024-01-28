import { BackgroundPoster } from '@/components/BackgroudPoster';
import { CatalogList } from '@/components/CatalogList';
import { CategoryList } from '@/components/CategoryList';

export default function Home() {
  return (
    <main className="px-4">
      <BackgroundPoster />
      <CategoryList />
      <CatalogList />
    </main>
  );
}
