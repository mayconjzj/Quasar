'use client';

import { ActiveLink } from '@/components/ActiveLink';
import { List } from '@/components/List';

import { Hamburger } from './components';
import { useMainNav } from './hooks';
import * as S from './styles';

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

      <div className="md:hidden z-20">
        <Hamburger isOpen={isOpen} handleClick={handleClick} />
      </div>

      <S.NavMobile is_open={isOpen}>
        <List.Root className="flex flex-col gap-2 font-bold">
          <List.Item className="border-b-2">
            <ActiveLink href="/discover/movies"> Filmes</ActiveLink>
          </List.Item>
          <List.Item className="border-b-2">
            <ActiveLink href="/discover/series">Séries</ActiveLink>
          </List.Item>
        </List.Root>
      </S.NavMobile>
    </>
  );
};
