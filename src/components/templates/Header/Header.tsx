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

      <nav className="md:flex items-center w-[60vw] justify-between hidden">
        <form className="flex gap-x-1 items-center border-white border-[0.5px] rounded-full px-2">
          <Input
            type="text"
            placeholder="Pesquisar"
            id="search"
            className="w-40 h-8 border-none focus:bg-transparent"
            autoComplete="off"
          />
          <Label htmlFor="search">
            <MagnifyingGlassIcon className="w-[25px] h-[25px]" />
          </Label>
        </form>

        <ul className="flex gap-6 items-center font-bold">
          <li>
            <ActiveLink button href="/movies">
              {' '}
              Filmes
            </ActiveLink>
          </li>
          <li>
            <ActiveLink button href="/series">
              Séries
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
