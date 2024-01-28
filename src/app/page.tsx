import { CatalogList } from '@/components/CatalogList';
import { CategoryList } from '@/components/CategoryList';

export default function Home() {
  return (
    <main className="px-4">
      <h1 className="text-3xl font-bold">Filmes e Séries!</h1>
      <CategoryList />
      <CatalogList />
    </main>
  );
}
