'use client';

import { useEffect, useState } from 'react';

import { Logo } from '@/components/Logo';
import { MainNav } from '@/components/MainNav';
import { SearchInput } from '@/components/SearchInput';

export const Header = () => {
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
      className={`placeholder:px-2 md:px-[30px] px-2 h-[70px] duration-300 fixed top-0 flex justify-between gap-2 w-screen items-center z-10 ${scrollActive && 'bg-background/90'}`}
    >
      <Logo logo="Quasar" />
      <SearchInput />
      <MainNav
        items={[
          { name: 'Filmes', href: '/discover/movies' },
          { name: 'Series', href: '/discover/series' }
        ]}
      />
    </header>
  );
};
