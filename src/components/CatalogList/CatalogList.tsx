'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { useCatalogList } from './hooks/useCatalogList';

export const CatalogList = () => {
  const { reels, isLoading } = useCatalogList();

  return (
    <div className={cn('flex flex-wrap gap-y-2 pag-x-1')}>
      {isLoading && <p>Loading...</p>}
      {reels?.map((item) => (
        <div key={item.id}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}` + item.poster_path}
            alt={`${item.title}`}
            width={150}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};
