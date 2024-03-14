import Link from 'next/link';

import { Button } from '@/components/ui/Button';

export const NotResults = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="mt-8">Nenhum resultado encontrado</p>
      <Link href="/discover/movies">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
};
