import { cn } from '@/lib/utils';

type SearchResultsRootProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const SearchResultsRoot = ({
  children,
  ...rest
}: SearchResultsRootProps) => {
  return (
    <section
      className={cn('w-full gap-[32px] flex flex-col', rest.className)}
      {...rest}
    >
      {children}
    </section>
  );
};
