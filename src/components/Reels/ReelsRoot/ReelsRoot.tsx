import { cn } from '@/lib/utils';

export const ReelsRoot = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={cn('w-full', rest.className)} {...rest}>
      {children}
    </section>
  );
};
