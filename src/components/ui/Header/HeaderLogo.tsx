import { cn } from '@/lib/TailwindMerge';

export type HeaderLogoProps = {
  logo: string;
};

export const HeaderLogo = ({ logo }: HeaderLogoProps) => {
  return <h1 className={cn('text-3xl font-black text-primary')}>{logo}</h1>;
};
