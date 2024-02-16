import { useState } from 'react';

export const useMainNav = () => {
  const [isOpen, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return {
    isOpen,
    handleClick
  };
};
