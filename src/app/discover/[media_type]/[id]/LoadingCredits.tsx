import { Skeleton } from '@/components/ui/Skeleton';

import { createArray } from '@/utils/createArray';

export const LoadingCredits = () => {
  return (
    <section className="space-y-3">
      <Skeleton className="w-60 h-6" />
      <Skeleton className="w-24 h-8" />
      <div className="flex gap-3 overflow-auto">
        {createArray(10).map((i) => (
          <Skeleton className="min-w-[150px] h-[225px] scale-90" key={i} />
        ))}
      </div>
    </section>
  );
};
