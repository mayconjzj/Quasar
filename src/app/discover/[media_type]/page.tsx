import { fetchCollection, fetchTopRated } from '@/services/http';

import { MediaGallery } from '@/components/MediaGallery';
import { MediaPoster } from '@/components/MediaPoster';
import { Skeleton } from '@/components/Skeleton';
import { TopRated } from '@/components/TopRated';

import * as S from './styles';
export default async function Discover({
  params
}: {
  params: { media_type: string };
}) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';
  const dataTopRated = await fetchTopRated({ mediaType });
  const dataCollection = await fetchCollection({ mediaType });

  return (
    <S.Container>
      <TopRated dataTopRated={dataTopRated} />
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
    </S.Container>
  );
}
