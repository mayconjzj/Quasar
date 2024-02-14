'use client';

import { Logo, MainNav, SearchInput } from './components';
import { useHeader } from './hooks';
import * as S from './styles';

export const Header = () => {
  const { scrollActive } = useHeader();

  return (
    <S.Header scroll={scrollActive.toString()}>
      <Logo />
      <SearchInput />
      <MainNav />
    </S.Header>
  );
};
