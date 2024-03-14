import { Skeleton } from '@/components/ui/Skeleton';

import { createArray } from '@/utils/createArray';

export const LoadingMediaDetails = () => {
  return (
    <section className="space-y-3">
      <Skeleton className="w-96 h-14" />
      <div className="flex gap-3">
        {createArray(3).map((i) => (
          <Skeleton className="w-24 h-8" key={i} />
        ))}
      </div>
      <Skeleton className="max-w-[1000px] h-4" />
      <Skeleton className="max-w-[800px] h-4" />
      <Skeleton className="w-60 h-6" />
    </section>
  );
};
