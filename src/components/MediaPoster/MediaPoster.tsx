import Image from 'next/image';

import { MediaInfo } from '@/models';

export const MediaPoster = ({ media }: { media: MediaInfo }) => {
  return (
    <Image
      className="object-cover min-w-[150px] h-[225px] scale-90 hover:scale-100 duration-200"
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
