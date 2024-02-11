import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const useSearch = () => {
  const schema = z.object({
    search: z.string().min(1)
  });

  const { register, handleSubmit, setValue, getValues } = useForm({
    resolver: zodResolver(schema)
  });

  return { register, handleSubmit, setValue, getValues };
};
