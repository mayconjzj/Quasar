'use client';

import { Header as HeaderComponent } from '@/components/ui/Header';

export const Header = () => {
  return (
    <HeaderComponent.Root>
      <HeaderComponent.Logo logo="Quasar" />
      <HeaderComponent.SearchInput />
      <HeaderComponent.MainNav
        items={[
          {
            name: 'Início',
            href: '/'
          },
          {
            name: 'Filmes',
            href: '/discover/movies'
          },
          {
            name: 'Séries',
            href: '/discover/series'
          }
        ]}
      />
    </HeaderComponent.Root>
  );
};
