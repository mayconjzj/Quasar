import { Category } from '@/models/Categories';
import { Reels } from '@/models/Reels';

import { api } from '../api';

export const loadCategories = async () => {
  const response = await api.get('/genre/list', {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      language: 'pt-BR'
    }
  });
  return response;
};

export const loadReels = async (id: number) => {
  const reels = await api.get('/discover/movie', {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      with_genres: id,
      language: 'pt-BR'
    }
  });

  return reels;
};

export const loadHomeList = async () => {
  const categories = await loadCategories();

  const results = await Promise.all(
    categories.genres.map(async (category: Category) => {
      const reels: Reels = await loadReels(category.id);
      return { ...category, reels: reels.results };
    })
  );

  return results;
};
