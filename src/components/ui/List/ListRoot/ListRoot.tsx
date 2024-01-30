import { cn } from '@/lib/utils';

type ListRootProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLUListElement>;

export const ListRoot = ({ children, ...props }: ListRootProps) => {
  return (
    <ul
      className={cn('flex gap-4 items-center font-bold', props.className)}
      {...props}
    >
      {children}
    </ul>
  );
};
