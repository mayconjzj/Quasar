import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Form } from '@/components/ui/Form';

export const Search = () => {
  return (
    <Form.Root className="hidden md:flex gap-x-1 items-center border-white border-[0.5px] rounded-full px-2">
      <Form.Input
        type="text"
        placeholder="Pesquisar"
        id="search"
        className="w-48 h-9 border-none focus:bg-transparent"
        autoComplete="off"
      />
      <Form.Label htmlFor="search">
        <MagnifyingGlassIcon className="w-[25px] h-[25px]" />
      </Form.Label>
    </Form.Root>
  );
};
