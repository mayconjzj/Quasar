import Link from 'next/link';

import { Button } from '@/components/Button';

export const SearchResultsNoResult = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="mt-8">Nenhum resultado encontrado</p>
      <Link href="/movies">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
};
