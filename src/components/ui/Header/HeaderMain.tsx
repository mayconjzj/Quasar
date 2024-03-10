import { HeaderLogo } from './HeaderLogo';
import { HeaderMainNav } from './HeaderMainNav';
import { HeaderRoot } from './HeaderRoot';
import { HeaderSearchInput } from './HeaderSearchInput';

export const HeaderMain = () => {
  return (
    <HeaderRoot>
      <HeaderLogo logo="Quasar" />
      <HeaderSearchInput />
      <HeaderMainNav
        items={[
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
    </HeaderRoot>
  );
};
