import { fetchMediaCredits } from '@/services/http/ApiCalls';

import { MediaPoster } from '@/components/ui/MediaPoster';
import { Skeleton } from '@/components/ui/Skeleton';

import { MediaInfoProps } from './page';

export const MediaCredits = async ({ params }: MediaInfoProps) => {
  const dataMediaCredits = await fetchMediaCredits(
    params.media_type,
    params.id
  );

  const director = dataMediaCredits?.crew.find(
    (crew) => crew.job === 'Director'
  );

  return (
    <section>
      {director && (
        <div>
          <span className="font-bold">Diretor: </span>
          <span className="text-muted-foreground">{director.name}</span>
        </div>
      )}
      {dataMediaCredits.cast?.length > 0 && (
        <div>
          <h2 className="font-bold text-2xl">Elenco</h2>
          <ul className="flex gap-3 overflow-auto">
            {dataMediaCredits.cast?.map((cast) => (
              <li key={cast.id}>
                <div className="relative min-w-[150px] h-[225px] scale-90 hover:scale-100 duration-200">
                  {cast.profile_path && (
                    <MediaPoster
                      className="object-cover"
                      alt={cast.name}
                      posterPath={cast.profile_path}
                    />
                  )}
                  {!cast.profile_path && (
                    <Skeleton className="min-w-[150px] h-[225px]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b to-background/100 from-transparent" />
                  <div className="p-2 text-center flex justify-center w-full absolute bottom-0 left-0">
                    <h3 className="font-bold">{cast.name}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
