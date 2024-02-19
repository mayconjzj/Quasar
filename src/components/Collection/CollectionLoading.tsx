import { List } from '@/components/ui/List';
import { Skeleton } from '@/components/ui/Skeleton';

export const CollectionLoading = () => {
  return (
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
  );
};
