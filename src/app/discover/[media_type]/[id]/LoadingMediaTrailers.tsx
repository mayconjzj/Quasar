import { Skeleton } from '@/components/ui/Skeleton';

import { createArray } from '@/utils/createArray';

export const LoadingMediaTrailers = () => {
  return (
    <section className="space-y-3">
      <Skeleton className="w-40 h-8" />
      <div className="flex gap-3 overflow-auto">
        {createArray(5).map((i) => (
          <Skeleton className="min-w-[400px] h-[225px]" key={i} />
        ))}
      </div>
    </section>
  );
};
