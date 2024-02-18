'use client';

import { useEffect, useState } from 'react';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { List } from '@/components/List';
import { ActiveLink } from '@/components/ui/ActiveLink';

export const MainNav = () => {
  const [isOpen, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const menu = document.getElementById('main-nav');

      if (menu && !menu.contains(event.target as Node)) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  const title = isOpen ? 'Fechar' : 'Abrir';

  return (
    <>
      <nav className="md:flex items-center justify-between hidden">
        <List.Root>
          <List.Item>
            <ActiveLink href="/discover/movies"> Filmes</ActiveLink>
          </List.Item>
          <List.Item>
            <ActiveLink href="/discover/series">Séries</ActiveLink>
          </List.Item>
        </List.Root>
      </nav>

      <div
        onClick={handleClick}
        title={title}
        className={`md:hidden ${isOpen && 'z-10'}`}
      >
        {isOpen && <Cross1Icon className="w-7 h-7" />}
        {isOpen || <HamburgerMenuIcon className="w-7 h-7" />}
      </div>

      <nav
        id="main-nav"
        className={`md:hidden invisible overflow-hidden fixed top-[70px] right-2 shadow-lg bg-background/90 p-4 w-44 h-44 opacity-0 duration-300 rounded-xl ${isOpen && 'visible overflow-auto opacity-100'}`}
      >
        <List.Root className="flex flex-col gap-2 font-bold">
          <List.Item>
            <ActiveLink href="/discover/movies"> Filmes</ActiveLink>
          </List.Item>
          <List.Item>
            <ActiveLink href="/discover/series">Séries</ActiveLink>
          </List.Item>
        </List.Root>
      </nav>
    </>
  );
};
