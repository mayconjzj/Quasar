'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';

import { useSearchInput } from './hooks';

export const SearchInput = () => {
  const { register, redirectSearch } = useSearchInput();

  return (
    <>
      {/* Desktop */}
      <Form.Root
        onSubmit={redirectSearch}
        className="hidden sm:flex gap-x-1 items-center border-[0.5px] rounded-xl px-2 border-foreground"
      >
        <Form.Input
          type="text"
          placeholder="Pesquisar"
          id="search"
          className="w-38 h-8 border-none focus:bg-transparent"
          {...register('search')}
        />

        <Button
          type="submit"
          className="w-9 h-9 p-0 shadow-none bg-transparent hover:bg-transparent"
        >
          <MagnifyingGlassIcon className="w-[25px] h-[25px] text-foreground" />
        </Button>
      </Form.Root>

      {/* Mobile */}
      <div className="sm:hidden ml-auto mr-2 cursor-pointer">
        <MagnifyingGlassIcon className="w-[25px] h-[25px] text-foreground" />
      </div>
    </>
  );
};
