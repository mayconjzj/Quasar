import { Logo } from './components/Logo';
import { MainNav } from './components/MainNav';
import { Search } from './components/Search';

export const Header = () => {
  return (
    <header className="p-2 md:px-[30px] absolute flex justify-between w-screen items-center">
      <Logo />
      <Search />
      <MainNav />
    </header>
  );
};
