import { cn } from '@/lib/TailwindMerge';

type ListItemProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLLIElement>;

const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <li className={cn(rest.className)} {...rest}>
      {children}
    </li>
  );
};

type ListRootProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLUListElement>;

const ListRoot = ({ children, ...props }: ListRootProps) => {
  return (
    <ul
      className={cn('flex gap-4 items-center font-bold', props.className)}
      {...props}
    >
      {children}
    </ul>
  );
};

export const List = {
  Root: ListRoot,
  Item: ListItem
};
