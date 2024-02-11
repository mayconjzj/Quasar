import { cn } from '@/lib/utils';

export const PaginationRoot = ({
  className,
  ...props
}: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('flex justify-center', className)}
    {...props}
  />
);
PaginationRoot.displayName = 'PaginationRoot';
