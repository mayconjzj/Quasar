'use client';

import Image from 'next/image';

import { useBackgroundPoster } from './hooks/useBackgroundPoster';

export const BackgroundPoster = () => {
  const { backgroundPoster, isLoading } = useBackgroundPoster();

  return (
    <div className="flex items-center justify-center w-screen h-[90vh]">
      {isLoading && <p>Loading...</p>}
      {backgroundPoster && (
        <Image
          className="object-cover w-full h-full"
          src={
            `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}` +
            backgroundPoster?.backdrop_path
          }
          alt="Background Poster"
          fill
          priority
        />
      )}
    </div>
  );
};
