import Image from 'next/image';

import { MediaDetails } from '@/@types/MediaDetails';

export const MediaBackdrop = ({
  dataTopRated
}: {
  dataTopRated: MediaDetails;
}) => {
  return (
    <Image
      className="object-cover"
      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w1280${dataTopRated?.backdrop_path}`}
      alt="dataTopRated Image"
      fill
      unoptimized
      priority
    />
  );
};
