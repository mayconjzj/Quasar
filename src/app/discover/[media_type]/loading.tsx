import { List } from '@/components/List';
import { Skeleton } from '@/components/Skeleton';

import * as S from './styles';

export default function Loading() {
  const data = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <S.Container>
      <S.TopRated>
        <Skeleton className="w-full h-full" />
      </S.TopRated>
      <S.Collection>
        <S.Content>
          {data.map((i) => (
            <>
              <Skeleton key={i} className="w-[225px] h-8" />
              <List.Root className="flex overflow-auto">
                {data.map((i) => (
                  <List.Item key={i} className="min-w-[150px] h-[225px]">
                    <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                  </List.Item>
                ))}
              </List.Root>
            </>
          ))}
        </S.Content>
      </S.Collection>
    </S.Container>
  );
}
