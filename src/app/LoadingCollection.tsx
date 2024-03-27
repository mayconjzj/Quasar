import { List } from '@/components/ui/List';
import { Skeleton } from '@/components/ui/Skeleton';

import { createArray } from '@/utils/createArray';

export const LoadingCollection = () => {
  return (
    <section className="px-2 md:px-[30px]">
      <div className="w-full my-[30px]">
        {createArray(10).map((i) => (
          <>
            <Skeleton key={i} className="w-[225px] h-8" />
            <List.Root className="flex overflow-auto">
              {createArray(10).map((i) => (
                <List.Item key={i} className="min-w-[150px] h-[225px]">
                  <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                </List.Item>
              ))}
            </List.Root>
          </>
        ))}
      </div>
    </section>
  );
};
