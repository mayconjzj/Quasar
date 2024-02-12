import { Logo } from './components/Logo';
import { MainNav } from './components/MainNav';
import { MediaSearchInput } from './components/MediaSearchInput';

export const Header = () => {
  return (
    <header className="px-2 md:px-[30px] h-[70px] absolute flex justify-between w-screen items-center z-10">
      <Logo />
      <MediaSearchInput />
      <MainNav />
    </header>
  );
};
