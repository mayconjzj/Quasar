import Link from 'next/link';

import { Button } from '@/components/ui/Button';

import { MediaInfo } from '@/models';

import * as S from './styles';

export const NoResults = ({ results }: { results: MediaInfo[] }) => {
  return (
    results.length === 0 && (
      <S.NoResult>
        <S.NoResultContent>Nenhum resultado encontrado</S.NoResultContent>
        <Link href="/discover/movies">
          <Button>Voltar</Button>
        </Link>
      </S.NoResult>
    )
  );
};
