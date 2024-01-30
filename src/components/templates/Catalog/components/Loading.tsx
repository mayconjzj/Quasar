import { Skeleton } from '@/components/ui/Skeleton';

export const Loading = () => {
  const repetitions = Array.from({ length: 10 });

  return (
    <>
      {repetitions.map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <Skeleton className=" w-[200px] h-10" />
          <div className="flex items-center gap-2 overflow-auto">
            {repetitions.map((_, i) => (
              <Skeleton key={i} className="min-w-[150px] h-[225px] " />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
