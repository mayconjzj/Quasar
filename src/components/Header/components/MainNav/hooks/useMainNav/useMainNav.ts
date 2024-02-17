import { useEffect, useState } from 'react';

export const useMainNav = () => {
  const [isOpen, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const menu = document.getElementById('main-nav');

      if (menu && !menu.contains(event.target as Node)) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return {
    isOpen,
    handleClick
  };
};
