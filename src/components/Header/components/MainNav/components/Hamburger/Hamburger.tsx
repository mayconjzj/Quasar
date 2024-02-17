import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

type HamburgerProps = {
  isOpen: boolean;
  handleClick: () => void;
};

export const Hamburger = ({ isOpen, handleClick }: HamburgerProps) => {
  const title = isOpen ? 'Fechar' : 'Abrir';

  return (
    <div onClick={handleClick} title={title}>
      {isOpen && <Cross1Icon className="sm:w-6 w-8" />}
      {isOpen || <HamburgerMenuIcon className="sm:w-6 w-8" />}
    </div>
  );
};
