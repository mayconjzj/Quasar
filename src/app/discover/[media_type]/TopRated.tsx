import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { MediaBackdrop } from '@/components/ui/MediaBackdrop';

import { firstDateYear } from '@/lib/utils';

import { MediaInfo } from '@/models';

import * as S from './styles';

type TopRatedProps = {
  dataTopRated: MediaInfo;
  mediaType: 'tv' | 'movie';
};

export const TopRated = ({ dataTopRated, mediaType }: TopRatedProps) => {
  return (
    <S.TopRated>
      <MediaBackdrop dataTopRated={dataTopRated} />
      <S.GradientBottom />
      <S.GradientLeft />

      <S.Details>
        <S.Title>{dataTopRated?.title || dataTopRated?.name}</S.Title>
        <S.MediaDetails>
          {dataTopRated.vote_average > 0 && (
            <S.Item>
              {Math.round(dataTopRated.vote_average * 10) / 10}{' '}
              <span className="text-[#46d369]">pontos</span>
            </S.Item>
          )}
          <S.Item>
            {dataTopRated.release_date &&
              firstDateYear(dataTopRated.release_date)}
            {dataTopRated.first_air_date &&
              firstDateYear(dataTopRated.first_air_date)}
          </S.Item>
          <S.Item>
            {dataTopRated.runtime > 0 && `${dataTopRated.runtime} minutos`}
            {dataTopRated.number_of_seasons > 0 &&
              `${dataTopRated.number_of_seasons} temporadas`}
          </S.Item>
        </S.MediaDetails>

        <S.Overview>{dataTopRated.overview}</S.Overview>
        <S.ContentButton>
          <Link href={`/discover/${mediaType}/${dataTopRated.id}`}>
            <Button>Detalhes</Button>
          </Link>
        </S.ContentButton>
        <S.Item>
          <span className="font-bold">Gêneros: </span>
          <span className="text-muted-foreground">
            {dataTopRated.genres?.map((genre) => genre.name).join(', ')}{' '}
          </span>
        </S.Item>
      </S.Details>
    </S.TopRated>
  );
};
