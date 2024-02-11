import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const useSearch = () => {
  const schema = z.object({
    search: z.string().min(1)
  });

  const { register, handleSubmit, getValues, setValue } = useForm({
    resolver: zodResolver(schema)
  });

  const { push } = useRouter();

  const redirectSearch = handleSubmit(() => {
    const { search } = getValues();
    push(`/search?query=${search}`);
    setValue('search', '');
  });

  return { register, redirectSearch };
};
