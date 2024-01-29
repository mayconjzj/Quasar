'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';

export const Header = () => {
  return (
    <header className="p-2 md:px-[30px] absolute flex justify-between w-screen items-center">
      <div>
        <h1 className="text-3xl font-black text-blue-500">Quasar</h1>
      </div>

      <form className="flex gap-x-2 items-center">
        <Input
          type="text"
          placeholder="Pesquisar"
          id="search"
          className="w-50 h-8 rounded-full border-white focus:bg-transparent"
        />
        <Label htmlFor="search">
          <MagnifyingGlassIcon className="w-[25px] h-[25px]" />
        </Label>
      </form>

      <nav>
        <ul className="flex gap-3 items-center font-bold">
          <li className="hover:text-blue-400 duration-150">Home</li>
          <li>
            <Select.Root>
              <Select.Trigger className="border-white h-8 rounded-full w-24 font-bold">
                <Select.Value placeholder="Filmes" />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Label>Selecione</Select.Label>
                  <Select.Item value="film-1">Filmes</Select.Item>
                  <Select.Item value="film-3">Séries</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </li>
          <li className="hover:text-blue-400 duration-150">Profile</li>
        </ul>
      </nav>
    </header>
  );
};
