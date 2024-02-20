import { Suspense } from 'react';

import { List } from '@/components/ui/List';
import { Skeleton } from '@/components/ui/Skeleton';

import { Collection } from './c';
import { TopRated } from './TopRated';

type DiscoverProps = {
  params: {
    media_type: string;
  };
};

export default async function Discover({ params }: DiscoverProps) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';

  return (
    <main>
      <Suspense
        fallback={
          <article className="h-[85vh] relative w-full text-foreground">
            <Skeleton className="w-full h-full" />
          </article>
        }
      >
        <TopRated mediaType={mediaType} />
      </Suspense>
      <Suspense
        fallback={
          <section className="px-2 md:px-[30px]">
            <div className="w-full my-[30px]">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                <>
                  <Skeleton key={i} className="w-[225px] h-8" />
                  <List.Root className="flex overflow-auto">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                      <List.Item key={i} className="min-w-[150px] h-[225px]">
                        <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                      </List.Item>
                    ))}
                  </List.Root>
                </>
              ))}
            </div>
          </section>
        }
      >
        <Collection mediaType={mediaType} />
      </Suspense>
    </main>
  );
}
