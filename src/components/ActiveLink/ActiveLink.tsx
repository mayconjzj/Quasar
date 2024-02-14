'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type ActiveLinkProps = {
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
        'hover:text-blue-500 duration-200 cursor-pointer',
        isActive && 'text-blue-500',
        rest.className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
