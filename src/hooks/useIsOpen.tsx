import { useEffect, useState } from 'react';

type useIsOpenProps = {
  id: string;
};

export const useIsOpen = ({ id }: useIsOpenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = document.getElementById(id);

      if (element && !element.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return { isOpen, setIsOpen, handleClick };
};
