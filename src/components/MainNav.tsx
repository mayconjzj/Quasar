'use client';

import { useEffect, useState } from 'react';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { ActiveLink } from '@/components/ui/ActiveLink';
import { List } from '@/components/ui/List';

type MainNavProps = {
  items: {
    name: string;
    href: string;
  }[];
};

export const MainNav = ({ items }: MainNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const menu = document.getElementById('main-nav');

      if (menu && !menu.contains(event.target as Node)) {
        setIsOpen(false);
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
          {items.map((item) => (
            <List.Item key={item.name}>
              <ActiveLink href={item.href}>{item.name}</ActiveLink>
            </List.Item>
          ))}
        </List.Root>
      </nav>

      <div
        title={title}
        onClick={handleClick}
        className={`md:hidden cursor-pointer`}
      >
        {isOpen && <Cross1Icon className="w-7 h-7" />}
        {isOpen || <HamburgerMenuIcon className="w-7 h-7" />}
      </div>

      <nav
        id="main-nav"
        className={`md:hidden fixed top-[70px] right-2 shadow-lg bg-background/90 p-4 w-44 h-44 duration-300 rounded-xl ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <List.Root className="flex flex-col gap-2 font-bold">
          {items.map((item) => (
            <List.Item key={item.name}>
              <ActiveLink href={item.href}>{item.name}</ActiveLink>
            </List.Item>
          ))}
        </List.Root>
      </nav>
    </>
  );
};
