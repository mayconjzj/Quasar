import { Category, Reels, MediaType } from '@/models';

import { api } from '../api';

// Buasca as categorias disponíveis.
export const loadCategories = async ({ mediaType = 'movie' }: MediaType) => {
  const response = await api.get(`/genre/${mediaType}/list`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: 'pt-BR'
    }
  });
  return response;
};

// Buasca os filmes disponíveis.
export const loadReels = async ({
  mediaType = 'movie',
  withGenres
}: {
  withGenres?: number;
  mediaType?: string;
}) => {
  const reels = await api.get(`/discover/${mediaType}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      with_genres: withGenres,
      language: 'pt-BR'
    }
  });

  return reels;
};

export const loadHomeList = async ({ mediaType = 'movie' }: MediaType) => {
  const categories = await loadCategories({ mediaType });

  const results = await Promise.all(
    categories.genres.map(async (category: Category) => {
      const reels: Reels = await loadReels({
        mediaType,
        withGenres: category.id
      });
      return { ...category, reels: reels };
    })
  );

  return results;
};
