import tw from 'tailwind-styled-components';

export const Header = tw.header<{ scroll: string }>`
  ${({ scroll }) => scroll === 'true' && 'bg-background'}
  placeholder:px-2
  md:px-[30px]
  px-2
  h-[70px]
  duration-300
  fixed
  top-0
  flex
  justify-between
  w-screen
  items-center
  z-10
`;
