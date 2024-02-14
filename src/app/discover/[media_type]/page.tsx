import { Genres, MediaResults } from '@/models';

import { api } from '@/lib/api';

import { Collection } from './collection.tsx2';
import * as S from './styles';
import { TopRated } from './top-rated';

type DiscoverProps = {
  params: {
    media_type: string;
  };
};

export default async function Discover({ params }: DiscoverProps) {
  const mediaType = params.media_type === 'series' ? 'tv' : 'movie';

  // Fetch do filme ou serie em destaque
  const fetchTopRated = async () => {
    const trendings = await api.get(`/trending/${mediaType}/week`, {
      params: { page: 1, language: 'pt-BR' }
    });
    const ramdomMedia =
      trendings.results[Math.floor(Math.random() * trendings.results.length)];

    return api.get(`/${mediaType}/${ramdomMedia.id}`, {
      params: { language: 'pt-BR' }
    });
  };

  // Fetch dos filmes ou series de acordo com as categorias
  const fetchCollection = async ({ mediaType }: { mediaType: string }) => {
    const [dataTrendings, dataCategories] = (await Promise.all([
      api.get(`/trending/${mediaType}/week`, {
        params: { page: 1, language: 'pt-BR' }
      }),

      api.get(`/genre/${mediaType}/list`, {
        params: { language: 'pt-BR' }
      })
    ])) as [MediaResults, Genres];

    // Cria o array com as categorias e os filmes ou series de cada categoria
    const reelsAndCategories = await Promise.all(
      dataCategories.genres.map(async (category) => {
        const mediaContent = await api.get(`/discover/${mediaType}`, {
          params: {
            with_genres: category.id,
            page: 1,
            language: 'pt-BR'
          }
        });

        return {
          id: category.id,
          name: category.name,
          media: mediaContent.results
        };
      })
    );

    // Cria uma categoria de destaques com os filmes ou series em destaque
    const catalogList = [
      {
        id: 1,
        name: 'Destaques',
        media: dataTrendings.results.map((contentInfo) => contentInfo)
      },
      ...reelsAndCategories
    ];

    return catalogList;
  };

  // Executa os fetchs simultaneamente
  const [topRated, dataCollection] = await Promise.all([
    fetchTopRated(),
    fetchCollection({ mediaType })
  ]);

  return (
    <S.Container>
      <TopRated dataTopRated={topRated} mediaType={mediaType} />
      <Collection dataCollection={dataCollection} mediaType={mediaType} />
    </S.Container>
  );
}
