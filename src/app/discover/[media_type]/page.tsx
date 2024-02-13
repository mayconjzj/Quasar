import Link from 'next/link';

import { fetchCollection, fetchTopRated } from '@/services/http';

import { Button } from '@/components/Button';
import { List } from '@/components/List';
import { MediaBackdrop } from '@/components/MediaBackdrop';
import { MediaPoster } from '@/components/MediaPoster';
import { Skeleton } from '@/components/Skeleton';

import { firstDateYear } from '@/lib';

import * as S from './styles';
export default async function Discover({
  params
}: {
  params: { media_type: string };
}) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';
  const [dataTopRated, dataCollection] = await Promise.all([
    fetchTopRated({ mediaType }),
    fetchCollection({ mediaType })
  ]);

  return (
    <S.Container>
      <S.TopRated>
        <MediaBackdrop dataTopRated={dataTopRated} />
        <S.GradientBottom />
        <S.GradientLeft />
        <S.Details>
          <S.Title>{dataTopRated?.title || dataTopRated?.name}</S.Title>
          <S.MediaDetails>
            <S.Item>
              {dataTopRated.vote_average && (
                <>
                  {Math.round(dataTopRated.vote_average * 10) / 10}{' '}
                  <span className="text-[#46d369]">pontos</span>
                </>
              )}
            </S.Item>
            <S.Item>
              {dataTopRated.release_date &&
                firstDateYear(dataTopRated.release_date)}
              {dataTopRated.first_air_date &&
                firstDateYear(dataTopRated.first_air_date)}
            </S.Item>
            <S.Item>
              {dataTopRated.runtime && `${dataTopRated.runtime} minutos`}
              {dataTopRated.number_of_seasons &&
                `${dataTopRated.number_of_seasons} temporadas`}
            </S.Item>
          </S.MediaDetails>
          <S.Overview>{dataTopRated.overview}</S.Overview>
          <S.ContentButton>
            <Button>Detalhes</Button>
          </S.ContentButton>
          <S.Item>
            <span className="font-bold">Gêneros: </span>
            <span className="text-[#aaa]">
              {dataTopRated.genres?.map((genre) => genre.name).join(', ')}{' '}
            </span>
          </S.Item>
        </S.Details>
      </S.TopRated>
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
    </S.Container>
  );
}
