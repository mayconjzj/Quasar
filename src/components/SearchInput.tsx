'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { z } from 'zod';

import { Button } from '@/components/ui/Button';
import { Form } from '@/components/ui/Form';

export const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const search = document.getElementById('search-input');

      if (search && !search.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

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
        onClick={toggleSearch}
        className="bg-transparent hover:bg-transparent shadow-none p-0"
      >
        <MagnifyingGlassIcon className="w-7 h-7" />
      </Button>
    </Form.Root>
  );
};
