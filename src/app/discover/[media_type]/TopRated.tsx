import Link from 'next/link';

import { Button } from '@/components/Button';
import { MediaBackdrop } from '@/components/MediaBackdrop';

import { MediaInfo } from '@/models';

import { firstDateYear } from '@/lib';

import * as S from './styles';

type TopRatedProps = {
  dataTopRated: MediaInfo;
};

export const TopRated = ({ dataTopRated }: TopRatedProps) => {
  return (
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
          <Link
            href={`/discover/${dataTopRated.media_type}/${dataTopRated.id}`}
          >
            <Button>Detalhes</Button>
          </Link>
        </S.ContentButton>
        <S.Item>
          <span className="font-bold">Gêneros: </span>
          <span className="text-[#aaa]">
            {dataTopRated.genres?.map((genre) => genre.name).join(', ')}{' '}
          </span>
        </S.Item>
      </S.Details>
    </S.TopRated>
  );
};
