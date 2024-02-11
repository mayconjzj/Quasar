import { cn } from '@/lib/utils';

export const MediaGalleryTitle = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn('font-bold text-2xl', rest.className)} {...rest}>
      {children}
    </h2>
  );
};
