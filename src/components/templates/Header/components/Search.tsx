'use client';

import { useRouter } from 'next/navigation';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/Button';
import { Form } from '@/components/ui/Form';

import { useSearch } from './hooks/useSearch';

export const Search = () => {
  const { register, handleSubmit, getValues } = useSearch();
  const { push } = useRouter();

  const redirectSearch = handleSubmit(() => {
    const query = getValues('search');
    push(`/search?query=${query}`);
  });

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
