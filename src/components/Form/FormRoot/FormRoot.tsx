import { cn } from '@/lib/tailwind-merge';

type FormRootProps = React.HTMLAttributes<HTMLFormElement>;

export const FormRoot = ({ children, ...rest }: FormRootProps) => {
  return (
    <form className={cn(rest.className)} {...rest}>
      {children}
    </form>
  );
};
