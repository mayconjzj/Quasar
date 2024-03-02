import { useEffect, useState } from 'react';

import { cn } from '@/lib/TailwindMerge';

export type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const HeaderRoot = ({ children, className }: HeaderProps) => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrollActive(true) : setScrollActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        `placeholder:px-2 md:px-[30px] px-2 h-[70px] duration-300 fixed top-0 flex justify-between gap-2 w-screen items-center z-10 ${scrollActive && 'bg-background/90'}`,
        className
      )}
    >
      {children}
    </header>
  );
};
