import { api } from '@/lib/api';

export default async function Page({
  params
}: {
  params: { id: number; media_type: string };
}) {
  const IdMediaInfo = params.id;
  const dataMediaInfo = await api.get(`/${params.media_type}/${IdMediaInfo}`, {
    params: { language: 'pt-BR' }
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
