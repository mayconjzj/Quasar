import { MediaGallery } from '@/components/MediaGallery';
import { Skeleton } from '@/components/Skeleton';

import * as S from './styles';

export default function Loading() {
  const data = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <S.Container>
      <S.TopRated>
        <Skeleton className="w-full h-[85vh]" />
      </S.TopRated>
      <S.Collection>
        <MediaGallery.Root>
          {data.map((i) => (
            <>
              <Skeleton key={i} className="w-[225px] h-8" />
              <MediaGallery.Content>
                {data.map((i) => (
                  <Skeleton
                    key={i}
                    className="min-w-[150px] h-[225px] scale-90"
                  />
                ))}
              </MediaGallery.Content>
            </>
          ))}
        </MediaGallery.Root>
      </S.Collection>
    </S.Container>
  );
}
