'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { twMerge } from 'tailwind-merge';

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  button?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === rest.href;

  return (
    <Link
      className={twMerge(
        'hover:text-blue-500 duration-200 cursor-pointer',
        isActive && 'text-blue-500',
        rest.button &&
          'text-white px-4 py-2 rounded-full border-blue-500 border-2 hover:text-white hover:bg-blue-500',
        isActive && rest.button && 'bg-blue-500',
        rest.className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
