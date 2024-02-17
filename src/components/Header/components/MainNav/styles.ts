import tw from 'tailwind-styled-components';

export const NavMobile = tw.nav<{ is_open: boolean }>`
  ${({ is_open }) => `
    md:hidden
    z-10
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
        w-[50%]
        visible
        overflow-x-auto
        opacity-100
      `
    }
  `}
`;
