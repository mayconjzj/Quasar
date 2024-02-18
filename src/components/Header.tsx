'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Cross1Icon,
  HamburgerMenuIcon,
  MagnifyingGlassIcon
} from '@radix-ui/react-icons';
import { z } from 'zod';

import { ActiveLink } from '@/components/ui/ActiveLink';
import { Button } from '@/components/ui/Button';
import { Form } from '@/components/ui/Form';
import { List } from '@/components/ui/List';

export const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [mainNavActive, setMainNavActive] = useState(false);

  const toggleSearch = () => {
    setInputActive((prevState) => !prevState);
  };

  const handleClick = () => {
    setMainNavActive((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrollActive(true) : setScrollActive(false);
    };

    const toggleSearch = (event: MouseEvent) => {
      const search = document.getElementById('search-input');

      if (search && !search.contains(event.target as Node)) {
        setInputActive(false);
      }
    };

    const handleClick = (event: MouseEvent) => {
      const menu = document.getElementById('main-nav');

      if (menu && !menu.contains(event.target as Node)) {
        setMainNavActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', toggleSearch);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', toggleSearch);
      document.removeEventListener('click', handleClick);
    };
  }, []);

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
    setInputActive(false);
  });

  const title = mainNavActive ? 'Fechar' : 'Abrir';

  return (
    <header
      className={`placeholder:px-2 md:px-[30px] px-2 h-[70px] duration-300 fixed top-0 flex justify-between gap-2 w-screen items-center z-10 ${scrollActive && 'bg-background/90'}`}
    >
      <div className="flex items-center">
        <h1 className="text-3xl font-black text-primary">Quasar</h1>
      </div>
      <Form.Root
        onSubmit={redirectSearch}
        id="search-input"
        className={`sm:justify-center sm:w-auto sm:ml-0 flex gap-x-1 items-center justify-end w-10 h-10 px-1 overflow-hidden ml-auto duration-150 ${inputActive && 'w-[300px]'}`}
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
      <nav className="md:flex items-center justify-between hidden">
        <List.Root>
          <List.Item>
            <ActiveLink href="/discover/movies"> Filmes</ActiveLink>
          </List.Item>
          <List.Item>
            <ActiveLink href="/discover/series">Séries</ActiveLink>
          </List.Item>
        </List.Root>
      </nav>

      <div onClick={handleClick} title={title} className={`md:hidden`}>
        {mainNavActive && <Cross1Icon className="w-7 h-7" />}
        {mainNavActive || <HamburgerMenuIcon className="w-7 h-7" />}
      </div>

      <nav
        id="main-nav"
        className={`md:hidden fixed top-[70px] right-2 shadow-lg bg-background/90 p-4 w-44 h-44 duration-300 rounded-xl ${mainNavActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <List.Root className="flex flex-col gap-2 font-bold">
          <List.Item>
            <ActiveLink href="/discover/movies"> Filmes</ActiveLink>
          </List.Item>
          <List.Item>
            <ActiveLink href="/discover/series">Séries</ActiveLink>
          </List.Item>
        </List.Root>
      </nav>
    </header>
  );
};
