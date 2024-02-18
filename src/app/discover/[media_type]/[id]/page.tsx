import { fetchMediaDetails } from '@/services';

type MediaDetailsProps = {
  params: {
    id: number;
    media_type: string;
  };
};

export default async function MediaDetails({ params }: MediaDetailsProps) {
  const dataMediaInfo = await fetchMediaDetails(params.media_type, params.id);

  return (
    <main className="mt-[70px]">
      <article>
        <div>
          <h1>{dataMediaInfo?.title || dataMediaInfo?.name}</h1>
        </div>
      </article>
    </main>
  );
}
