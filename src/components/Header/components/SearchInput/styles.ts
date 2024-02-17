import tw from 'tailwind-styled-components';

export const SearchInput = tw.div<{ is_open: string }>`
  ${({ is_open }) => `
    flex
    items-center
    justify-center
    duration-300
    sm:w-auto
    w-screen
    sm:visible
    invisible
    sm:h-auto
    h-0
    overflow-hidden
    sm:opacity-100
    opacity-0
    sm:relative
    absolute
    sm:bg-transparent
    bg-background
    rounded-xl
    border-b
    ${
      is_open === 'true' &&
      `
      visible
      h-[15vh]
      opacity-100
    `
    }
  `}
`;

export const ToogleSearch = tw.div`
  sm:hidden
  ml-auto
  cursor-pointer  
`;
