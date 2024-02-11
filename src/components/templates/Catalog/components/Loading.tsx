import { Skeleton } from '@/components/ui/Skeleton';

export const LoadingCard = () => {
  return <Skeleton className="min-w-[150px] h-[225px] scale-90" />;
};

export const LoadingCategory = () => {
  return <Skeleton className="w-[200px] h-10" />;
};
