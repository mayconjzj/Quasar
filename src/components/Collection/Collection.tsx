import { MediaGallery } from '@/components/MediaGallery';
import { MediaPoster } from '@/components/MediaPoster';
import { Skeleton } from '@/components/Skeleton';

import { Gallery } from '@/models';

import * as S from './styles';

export const Collection = ({
  dataCollection
}: {
  dataCollection: Gallery[];
}) => {
  return (
    <S.Collection>
      {dataCollection.map((genre) => (
        <MediaGallery.Root key={genre.id}>
          <MediaGallery.Title>{genre.name}</MediaGallery.Title>
          <MediaGallery.Content>
            {genre.media.map((media) => (
              <>
                {media.poster_path && <MediaPoster media={media} />}
                {!media.poster_path && (
                  <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                )}
              </>
            ))}
          </MediaGallery.Content>
        </MediaGallery.Root>
      ))}
    </S.Collection>
  );
};
