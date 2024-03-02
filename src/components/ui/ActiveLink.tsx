'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/TailwindMerge';

export type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === rest.href;

  return (
    <Link
      className={cn(
        'hover:text-primary duration-200 cursor-pointer',
        isActive && 'text-primary',
        rest.className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
