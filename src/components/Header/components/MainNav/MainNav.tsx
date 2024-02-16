'use client';

import { ActiveLink } from '@/components/ActiveLink';
import { List } from '@/components/List';

import { Hamburger } from './components';
import { useMainNav } from './hooks';

export const MainNav = () => {
  const { isOpen, handleClick } = useMainNav();

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

      <div className="md:hidden">
        <Hamburger isOpen={isOpen} handleClick={handleClick} />
      </div>

      <nav
        className={`md:hidde absolute w-screen h-screen ${isOpen ? 'block' : 'hidden'}`}
      >
        <List.Root className="flex-column">
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
