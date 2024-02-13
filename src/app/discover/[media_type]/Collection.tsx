import Link from 'next/link';

import { List } from '@/components/List';
import { MediaPoster } from '@/components/MediaPoster';
import { Skeleton } from '@/components/Skeleton';

import { Gallery } from '@/models';

import * as S from './styles';

type CollectionProps = {
  dataCollection: Gallery[];
  mediaType: string;
};

export const Collection = ({ dataCollection, mediaType }: CollectionProps) => {
  return (
    <S.Collection>
      {dataCollection.map((genre) => (
        <S.Content key={genre.id}>
          <S.SubTitle>{genre.name}</S.SubTitle>
          <List.Root className="overflow-x-auto flex">
            {genre.media.map((media) => (
              <List.Item key={media.id}>
                <Link href={`/${mediaType}/${media.id}`}>
                  {media.poster_path && <MediaPoster media={media} />}
                  {!media.poster_path && (
                    <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                  )}
                </Link>
              </List.Item>
            ))}
          </List.Root>
        </S.Content>
      ))}
    </S.Collection>
  );
};
