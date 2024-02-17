import tw from 'tailwind-styled-components';

export const MainNav = tw.nav`
  md:flex
  items-center
  justify-between
  hidden
`;

export const MainNavMobile = tw.nav<{ is_open: boolean }>`
  ${({ is_open }) => `
    md:hidden
    invisible
    overflow-x-hidden
    fixed
    bg-background
    p-4
    pt-[55px]
    right-0
    top-0
    w-0
    h-screen
    opacity-0
    duration-150
    ${
      is_open &&
      `
        w-[60%]
        visible
        overflow-x-auto
        opacity-100
      `
    }
  `}
`;

export const ToggleHamburger = tw.div<{ is_open: boolean }>`
  ${({ is_open }) => `
    md:hidden

    ${is_open && `z-10`}
  `}
`;
