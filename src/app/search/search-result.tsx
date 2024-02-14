import Link from 'next/link';

import { MediaPoster } from '@/components/MediaPoster';
import { Skeleton } from '@/components/Skeleton';

import { formatDate } from '@/lib/utils';

import { MediaInfo } from '@/models';

import * as S from './styles';

type SearchResultsProps = {
  results: MediaInfo[];
};

export const SearchResults = ({ results }: SearchResultsProps) => {
  return results.map((result) => (
    <S.SearchResults key={result.id}>
      {result.poster_path && (
        <Link href={`/discover/${result.media_type}/${result.id}`}>
          <MediaPoster className="scale-100" media={result} />
        </Link>
      )}
      {!result.poster_path && (
        <Skeleton className="min-w-[150px] min-h-[225px]" />
      )}

      <S.Details>
        <Link href={`/discover/${result.media_type}/${result.id}`}>
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
    </S.SearchResults>
  ));
};