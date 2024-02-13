import Link from 'next/link';

import { MediaPoster } from '@/components/MediaPoster';
import { Skeleton } from '@/components/Skeleton';

import { MediaInfo } from '@/models';

import { formatDate } from '@/lib';

import * as S from './styles';

export const SearchResults = ({ results }: { results: MediaInfo[] }) => {
  return results.map((result) => (
    <S.SearchResultsItem key={result.id}>
      {result.poster_path && <MediaPoster media={result} />}
      {!result.poster_path && (
        <Skeleton className="min-w-[150px] min-h-[225px]" />
      )}
      <S.Details>
        <Link href={`/${result.media_type}/${result.id}`}>
          <S.SubTitle>{result.title || result.name}</S.SubTitle>
        </Link>
        {result.release_date ||
          (result.first_air_date && (
            <span className="font-light">
              {formatDate(`${result.release_date || result.first_air_date}`)}
            </span>
          ))}
        {result.vote_average && (
          <S.VoteAverage>
            <span className="font-semibold text-[12px]">Pontos</span>
            <span className="font-bold text-xl">
              {Math.round(result.vote_average * 10) / 10}
            </span>
          </S.VoteAverage>
        )}
        {result.overview && <S.Overview>{result.overview}</S.Overview>}
      </S.Details>
    </S.SearchResultsItem>
  ));
};
