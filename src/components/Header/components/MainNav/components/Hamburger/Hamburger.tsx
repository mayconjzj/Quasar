import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

type HamburgerProps = {
  isOpen: boolean;
  handleClick: () => void;
};

export const Hamburger = ({ isOpen, handleClick }: HamburgerProps) => {
  const title = isOpen ? 'Fechar' : 'Abrir';

  return (
    <div onClick={handleClick} title={title}>
      {isOpen && <Cross1Icon className="w-6 h-6" />}
      {isOpen || <HamburgerMenuIcon className="w-6 h-6" />}
    </div>
  );
};
