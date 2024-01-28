import { cn } from '@/lib/utils';

export const ReelsContent = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex overflow-auto gap-2', rest.className)} {...rest}>
      {children}
    </div>
  );
};
