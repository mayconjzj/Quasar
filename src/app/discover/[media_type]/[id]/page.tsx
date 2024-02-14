import { fetchMediaInfo } from '@/services/http';

export default async function Page({
  params
}: {
  params: { id: number; media_type: string };
}) {
  const IdMediaInfo = params.id;
  const dataMediaInfo = await fetchMediaInfo({
    mediaType: params.media_type,
    id: IdMediaInfo
  });
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
