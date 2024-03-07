import Image from 'next/image';
import { HtmlHTMLAttributes } from 'react';

import { cn } from '@/lib/TailwindMerge';

export type MediaPosterProps = HtmlHTMLAttributes<HTMLImageElement> & {
  posterPath: string;
  alt: string;
};

export const MediaPoster = ({ posterPath, alt, ...rest }: MediaPosterProps) => {
  return (
    <Image
      className={cn(rest.className)}
      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/w200${posterPath}`}
      alt={alt}
      width={150}
      height={225}
      unoptimized
      loading="lazy"
    />
  );
};
