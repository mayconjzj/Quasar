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
      className="hidden md:flex gap-x-1 items-center border-white border-[0.5px] rounded-full px-2"
    >
      <Form.Input
        type="text"
        placeholder="Pesquisar"
        id="search"
        className="w-48 h-9 border-none focus:bg-transparent"
        {...register('search')}
      />
      <Button
        className="w-9 h-9 p-0 bg-transparent hover:bg-transparent text-white hover:text-white"
        type="submit"
      >
        <MagnifyingGlassIcon className="w-[25px] h-[25px]" />
      </Button>
    </Form.Root>
  );
};
