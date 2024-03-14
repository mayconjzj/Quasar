import { Skeleton } from '@/components/ui/Skeleton';

export const LoadingTopRated = () => {
  return (
    <article className="h-[85vh] relative w-full text-foreground">
      <Skeleton className="w-full h-full" />
    </article>
  );
};
