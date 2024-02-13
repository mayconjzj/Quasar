import tw from 'tailwind-styled-components';

export const Container = tw.main``;

export const TopRated = tw.article`h-[85vh] relative w-full text-primary-foreground`;
export const Item = tw.div``;
export const GradientBottom = tw.div`absolute inset-0 bg-gradient-to-b to-black/100 from-transparent`;
export const GradientLeft = tw.div`absolute inset-0 bg-gradient-to-r from-black/100 to-transparent`;
export const Details = tw.div`absolute flex flex-col gap-3 p-2 md:px-[30px] h-full justify-end md:justify-center`;
export const Title = tw.h1`font-bold text-5xl`;
export const MediaDetails = tw.div`text-[18px] font-bold flex gap-3`;
export const Overview = tw.p`max-w-[600px] line-clamp-4`;
export const ContentButton = tw.div`flex gap-2`;

export const Collection = tw.section`px-2 md:px-[30px]`;
export const Content = tw.div`w-full my-[30px]`;
export const SubTitle = tw.h2`font-bold text-2xl`;
