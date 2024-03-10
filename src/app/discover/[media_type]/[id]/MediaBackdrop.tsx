import { fetchMediaDetails } from '@/services/http/ApiCalls';

import { MediaBackdrop as Backdrop } from '@/components/ui/MediaBackdrop';

import { MediaInfoProps } from './page';

export const MediaBackdrop = async ({ params }: MediaInfoProps) => {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return (
    <article className="h-[100vh] relative -z-10">
      <Backdrop dataTopRated={dataMediaInfo} />
      <div className="absolute inset-0 bg-gradient-to-b to-background/100 from-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/100 to-transparent" />
    </article>
  );
};
