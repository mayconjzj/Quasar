import tw from 'tailwind-styled-components';

export const Container = tw.main`pt-[70px] pb-8 md:px-8 px-2 flex flex-col gap-4 max-w-[1200px] m-auto`;
export const Content = tw.section`w-full gap-4 flex flex-col`;

export const Title = tw.h1`text-3xl font-black text-center`;
export const NoResult = tw.div`flex flex-col items-center gap-2`;
export const NoResultContent = tw.p`mt-8`;

export const SearchResults = tw.div`flex gap-x-4 gap-y-2 rounded-xl overflow-hidden`;
export const Details = tw.div`flex flex-col gap-1 h-[200px] m-auto relative w-full`;
export const SubTitle = tw.h2`font-bold text-xl`;
export const VoteAverage = tw.div`border-[1px] border-foreground w-16 h-16 rounded-xl flex flex-col items-center justify-center`;
export const Overview = tw.div`line-clamp-2 bottom-0 absolute font-semibold`;
