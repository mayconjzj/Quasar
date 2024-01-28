'use client';

import Image from 'next/image';
import { useState } from 'react';

import { loadHomeList } from '@/services/http/tmdb';
import { useQuery } from '@tanstack/react-query';

import { Reel } from '@/models';

export default function Home() {
  const [mediaType] = useState('movie');

  const { data: results, isLoading } = useQuery({
    queryKey: ['loadHomeList'],
    queryFn: () => loadHomeList({ mediaType })
  });

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      <section>
        {results?.map((category) => (
          <div key={category.id}>
            <h2 className="font-bold">{category.name}</h2>
            <ul className="flex gap-4 overflow-auto">
              {category.reels.map((reel: Reel) => (
                <Image
                  key={reel.id}
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${reel.poster_path}`}
                  alt={`${reel.title} poster`}
                  width={200}
                  height={300}
                  priority
                />
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
