import Image from 'next/image';

import { MediaInfo } from '@/@types/MediaInfo';

import { cn } from '@/lib/TailwindMerge';

type MediaPosterProps = {
  media: MediaInfo;
  className?: string;
};

export const MediaPoster = ({ media, ...rest }: MediaPosterProps) => {
  return (
    <Image
      className={cn(
        'object-cover min-w-[150px] h-[225px] scale-90 hover:scale-100 duration-200',
        rest.className
      )}
      key={media.id}
      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w200${media.poster_path}`}
      alt={`${media.title || media.name}`}
      width={150}
      height={225}
      unoptimized
      loading="lazy"
    />
  );
};
