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
      <S.MainNav>
        <List.Root>
          <List.Item>
            <ActiveLink href="/discover/movies"> Filmes</ActiveLink>
          </List.Item>
          <List.Item>
            <ActiveLink href="/discover/series">Séries</ActiveLink>
          </List.Item>
        </List.Root>
      </S.MainNav>

      <S.ToggleHamburger is_open={isOpen.toString()}>
        <Hamburger isOpen={isOpen} handleClick={handleClick} />
      </S.ToggleHamburger>

      <S.MainNavMobile is_open={isOpen.toString()} id="main-nav">
        <List.Root className="flex flex-col gap-2 font-bold">
          <List.Item className="border-b-2 p-2">
            <ActiveLink href="/discover/movies"> Filmes</ActiveLink>
          </List.Item>
          <List.Item className="border-b-2 p-2">
            <ActiveLink href="/discover/series">Séries</ActiveLink>
          </List.Item>
        </List.Root>
      </S.MainNavMobile>
    </>
  );
};
