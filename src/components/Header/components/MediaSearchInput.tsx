'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';

import { useSearch } from './hooks/useSearch';

export const MediaSearchInput = () => {
  const { register, redirectSearch } = useSearch();

  return (
    <Form.Root
      onSubmit={redirectSearch}
      className="hidden md:flex gap-x-1 items-center border-[0.5px] rounded-md px-2 border-foreground"
    >
      <Form.Input
        type="text"
        placeholder="Pesquisar"
        id="search"
        className="w-48 h-9 border-none focus:bg-transparent"
        {...register('search')}
      />
      <Button
        className="w-9 h-9 p-0 shadow-none bg-transparent hover:bg-transparent"
        type="submit"
      >
        <MagnifyingGlassIcon className="w-[25px] h-[25px] text-foreground" />
      </Button>
    </Form.Root>
  );
};
