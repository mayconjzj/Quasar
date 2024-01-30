import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { ActiveLink } from '@/components/ui/ActiveLink';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export const Header = () => {
  return (
    <header className="p-2 md:px-[30px] absolute flex justify-between w-screen items-center">
      <div>
        <h1 className="text-3xl font-black text-blue-500">Quasar</h1>
      </div>

      <form className="flex gap-x-1 items-center border-white border-[0.5px] rounded-full px-2">
        <Input
          type="text"
          placeholder="Pesquisar"
          id="search"
          className="w-48 h-9 border-none focus:bg-transparent"
          autoComplete="off"
        />
        <Label htmlFor="search">
          <MagnifyingGlassIcon className="w-[25px] h-[25px]" />
        </Label>
      </form>

      <nav className="md:flex items-center justify-between hidden">
        <ul className="flex gap-4 items-center font-bold">
          <li>
            <ActiveLink button={true} href="/movies">
              {' '}
              Filmes
            </ActiveLink>
          </li>
          <li>
            <ActiveLink button={true} href="/series">
              Séries
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
