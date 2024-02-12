import Image from 'next/image';

import { fetchCollection, fetchTopRated } from '@/services/http';

import { Button } from '@/components/Button';
import { MediaGallery } from '@/components/MediaGallery';
import { Skeleton } from '@/components/Skeleton';

import { firstDateYear } from '@/lib/utils';

import * as S from './styles';

export default async function Discover({
  params
}: {
  params: { media_type: string };
}) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';
  const dataCollection = await fetchCollection({ mediaType });
  const dataTopRated = await fetchTopRated({ mediaType });

  return (
    <S.Container>
      <S.TopRated>
        <Image
          className="object-cover"
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w1280${dataTopRated?.backdrop_path}`}
          alt="dataTopRated Image"
          fill
          unoptimized
          priority
        />
        <S.GradientBottom />
        <S.GradientLeft />
        <S.Details>
          <S.Title>{dataTopRated?.title || dataTopRated?.name}</S.Title>
          <S.MediaDetails>
            <S.Item>
              {dataTopRated?.vote_average && (
                <>
                  {Math.round(dataTopRated.vote_average * 10) / 10}{' '}
                  <span className="text-[#46d369]">pontos</span>
                </>
              )}
            </S.Item>
            <S.Item>
              {dataTopRated?.release_date &&
                firstDateYear(dataTopRated.release_date)}
              {dataTopRated?.first_air_date &&
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
        {dataCollection.map((category) => (
          <MediaGallery.Root key={category.id}>
            <MediaGallery.Title>{category.name}</MediaGallery.Title>
            <MediaGallery.Content>
              {category.media.map((content) => (
                <>
                  {content.poster_path && (
                    <Image
                      className="scale-90 hover:scale-100 cursor-pointer duration-200 min-w-[150px]"
                      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w200${content.poster_path}`}
                      alt={`${content.title || content.name}`}
                      width={150}
                      height={225}
                      unoptimized
                      loading="lazy"
                    />
                  )}
                  {!content.poster_path && (
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
