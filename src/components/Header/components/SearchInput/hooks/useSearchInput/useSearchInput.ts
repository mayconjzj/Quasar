import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const useSearchInput = () => {
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

  return {
    register,
    redirectSearch,
    isOpen,
    toggleSearch
  };
};
