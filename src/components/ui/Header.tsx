import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useIsOpen } from '@/hooks/useIsOpen';
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

import { cn } from '@/lib/TailwindMerge';

export type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const HeaderRoot = ({ children, className }: HeaderProps) => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrollActive(true) : setScrollActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        `placeholder:px-2 md:px-[30px] px-2 h-[70px] duration-300 fixed top-0 flex justify-between gap-2 w-screen items-center z-10 ${scrollActive && 'bg-background/90'}`,
        className
      )}
    >
      {children}
    </header>
  );
};

type HeaderLogoProps = {
  logo: string;
};

const HeaderLogo = ({ logo }: HeaderLogoProps) => {
  return <h1 className={cn('text-3xl font-black text-primary')}>{logo}</h1>;
};

type HeaderMainNavProps = {
  items: {
    name: string;
    href: string;
  }[];
};

const HeaderMainNav = ({ items }: HeaderMainNavProps) => {
  const { isOpen, handleClick } = useIsOpen({ id: 'main-nav' });

  const title = isOpen ? 'Fechar' : 'Abrir';

  return (
    <>
      <nav className="md:flex items-center justify-between hidden">
        <List.Root>
          {items.map((item) => (
            <List.Item key={item.name}>
              <ActiveLink href={item.href}>{item.name}</ActiveLink>
            </List.Item>
          ))}
        </List.Root>
      </nav>

      <Button
        title={title}
        onClick={handleClick}
        variant={'link'}
        size={'icon'}
        className="md:hidden"
      >
        {isOpen && <Cross1Icon className="w-7 h-7" />}
        {isOpen || <HamburgerMenuIcon className="w-7 h-7" />}
      </Button>

      <nav
        id="main-nav"
        className={`md:hidden fixed top-[70px] right-2 shadow-lg bg-background/90 p-4 w-44 h-44 duration-300 rounded-xl ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <List.Root className="flex flex-col gap-2 font-bold">
          {items.map((item) => (
            <List.Item key={item.name}>
              <ActiveLink href={item.href}>{item.name}</ActiveLink>
            </List.Item>
          ))}
        </List.Root>
      </nav>
    </>
  );
};

const SearchInput = () => {
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

export const Header = {
  Root: HeaderRoot,
  Logo: HeaderLogo,
  MainNav: HeaderMainNav,
  SearchInput: SearchInput
};
