'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useIsOpen } from '@/hooks/useIsOpen';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { z } from 'zod';

import { Button } from './ui/Button';
import { Form } from './ui/Form';

export const SearchInput = () => {
  const { isOpen, setIsOpen, handleClick } = useIsOpen({ id: 'search-input' });

  const schema = z.object({
    search: z.string().min(1)
  });

  const { register, handleSubmit, getValues, setValue } = useForm({
    resolver: zodResolver(schema)
  });

  const { push } = useRouter();

  const redirectSearch = handleSubmit(() => {
    const { search } = getValues() as {
      search: string;
    };
    push(`/search?query=${search}&page=1`);
    setValue('search', '');
    setIsOpen(false);
  });

  return (
    <Form.Root
      onSubmit={redirectSearch}
      id="search-input"
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
        title="Pesquisar"
        variant={'link'}
        size={'icon'}
        onClick={handleClick}
      >
        <MagnifyingGlassIcon className="w-7 h-7" />
      </Button>
    </Form.Root>
  );
};
