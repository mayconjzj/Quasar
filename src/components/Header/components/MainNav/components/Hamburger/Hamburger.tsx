import { FaBars, FaTimes } from 'react-icons/fa';

import * as S from './styles';

type HamburgerProps = {
  isOpen: boolean;
  handleClick: () => void;
};

export const Hamburger = ({ isOpen, handleClick }: HamburgerProps) => {
  const title = isOpen ? 'Fechar' : 'Abrir';

  return (
    <S.Content onClick={handleClick} title={title}>
      {isOpen ? <FaTimes /> : <FaBars />}
    </S.Content>
  );
};
