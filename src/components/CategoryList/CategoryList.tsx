'use client';

import { useCategoryList } from './hooks/useCategoryList';

export const CategoryList = () => {
  const { categories, isLoading } = useCategoryList();

  return (
    <ul className="flex gap-2">
      {isLoading && <p>Loading...</p>}
      {categories?.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};
