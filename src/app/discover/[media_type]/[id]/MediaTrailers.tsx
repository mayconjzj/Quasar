import { fetchMediaTrailers } from '@/services/http/ApiCalls';

export const MediaTrailers = async ({
  params
}: {
  params: { media_type: string; id: number };
}) => {
  const dataMediaTrailers = await fetchMediaTrailers(
    params.media_type,
    params.id
  );

  return (
    <section>
      {dataMediaTrailers?.results?.length > 0 && (
        <>
          <h2 className="font-bold text-2xl">
            {dataMediaTrailers?.results?.length > 1 ? 'Trailers' : 'Trailer'}
          </h2>
          <div className="flex gap-x-3 overflow-auto">
            {dataMediaTrailers?.results?.map((trailer) => (
              <div key={trailer.id} className="min-w-[400px] h-[225px]">
                <iframe
                  className="w-full h-full aspect-video"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
