import { cn } from '@/lib';

type ListItemProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLLIElement>;

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <li className={cn(rest.className)} {...rest}>
      {children}
    </li>
  );
};
