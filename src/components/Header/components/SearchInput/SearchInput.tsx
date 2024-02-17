'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';

import { useSearchInput } from './hooks';
import * as S from './styles';

export const SearchInput = () => {
  const { register, redirectSearch, isOpen, toggleSearch } = useSearchInput();

  return (
    <>
      <S.SearchInput is_open={isOpen}>
        <Form.Root
          onSubmit={redirectSearch}
          className="flex gap-x-1 items-center border-[1px] rounded-xl px-2 border-foreground"
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
      </S.SearchInput>

      <S.ToogleSearch onClick={toggleSearch}>
        <MagnifyingGlassIcon className="w-[25px] h-[25px] text-foreground" />
      </S.ToogleSearch>
    </>
  );
};
