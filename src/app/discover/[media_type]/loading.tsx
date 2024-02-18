import { List } from '@/components/ui/List';
import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  const data = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main>
      <article className="h-[85vh] relative w-full text-foreground">
        <Skeleton className="w-full h-full" />
      </article>
      <section className="px-2 md:px-[30px]">
        <div className="w-full my-[30px]">
          {data.map((i) => (
            <>
              <Skeleton key={i} className="w-[225px] h-8" />
              <List.Root className="flex overflow-auto">
                {data.map((i) => (
                  <List.Item key={i} className="min-w-[150px] h-[225px]">
                    <Skeleton className="min-w-[150px] h-[225px] scale-90" />
                  </List.Item>
                ))}
              </List.Root>
            </>
          ))}
        </div>
      </section>
    </main>
  );
}
