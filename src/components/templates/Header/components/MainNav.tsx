import { ActiveLink } from '@/components/ui/ActiveLink';
import { List } from '@/components/ui/List';

export const MainNav = () => {
  return (
    <nav className="md:flex items-center justify-between hidden">
      <List.Root>
        <List.Item>
          <ActiveLink href="/movies"> Filmes</ActiveLink>
        </List.Item>
        <List.Item>
          <ActiveLink href="/series">Séries</ActiveLink>
        </List.Item>
      </List.Root>
    </nav>
  );
};
