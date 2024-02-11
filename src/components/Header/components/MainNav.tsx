import { ActiveLink } from '@/components/ActiveLink';
import { List } from '@/components/List';

export const MainNav = () => {
  return (
    <nav className="md:flex items-center justify-between hidden">
      <List.Root>
        <List.Item>
          <ActiveLink href="/movies"> Filmes</ActiveLink>
        </List.Item>
        <List.Item>
          <ActiveLink href="/tv">Séries</ActiveLink>
        </List.Item>
      </List.Root>
    </nav>
  );
};
