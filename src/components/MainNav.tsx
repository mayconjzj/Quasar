'use client';

import { useIsOpen } from '@/hooks/useIsOpen';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { ActiveLink } from '@/components/ui/ActiveLink';
import { List } from '@/components/ui/List';

import { Button } from './ui/Button';

type MainNavProps = {
  items: {
    name: string;
    href: string;
  }[];
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpen, handleClick } = useIsOpen({ id: 'main-nav' });

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

      <Button
        title={title}
        onClick={handleClick}
        variant={'link'}
        size={'icon'}
        className="md:hidden"
      >
        {isOpen && <Cross1Icon className="w-7 h-7" />}
        {isOpen || <HamburgerMenuIcon className="w-7 h-7" />}
      </Button>

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
