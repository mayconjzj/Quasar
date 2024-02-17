'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';

import { useSearchInput } from './hooks';

export const SearchInput = () => {
  const { register, redirectSearch, isOpen, toggleSearch } = useSearchInput();

  return (
    <Form.Root
      onSubmit={redirectSearch}
      className={`sm:justify-center sm:w-auto sm:ml-0 flex gap-x-1 items-center justify-end w-10 h-10 px-1 overflow-hidden ml-auto duration-150 ${isOpen && 'w-[300px]'}`}
    >
      <Form.Input
        type="text"
        placeholder="Pesquisar"
        className="border-none shadow-none"
        {...register('search')}
      />

      <Button
        type="submit"
        onClick={toggleSearch}
        className="bg-transparent shadow-none p-0"
      >
        <MagnifyingGlassIcon className="w-8 h-8" />
      </Button>
    </Form.Root>
  );
};
