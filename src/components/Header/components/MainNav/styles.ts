import tw from 'tailwind-styled-components';

export const MainNav = tw.nav`
  md:flex
  items-center
  justify-between
  hidden
`;

export const MainNavMobile = tw.nav<{ is_open: string }>`
  ${({ is_open }) => `
    md:hidden
    invisible
    overflow-hidden
    fixed
    top-[70px]
    right-2
    shadow-lg
    bg-background/90
    p-4
    w-44
    h-44
    opacity-0
    duration-300
    rounded-xl
    ${
      is_open === 'true' &&
      `
        visible
        overflow-auto
        opacity-100
      `
    }
  `}
`;

export const ToggleHamburger = tw.div<{ is_open: string }>`
  ${({ is_open }) => `
    md:hidden

    ${is_open === 'true' && `z-10`}
  `}
`;
