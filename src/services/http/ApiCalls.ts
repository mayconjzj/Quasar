import { api } from '@/services/api';

import { Genres } from '@/models/Genres';
import { MediaInfo } from '@/models/MediaInfo';
import { MediaResults } from '@/models/mediaResults';

export const fetchTrending = async (mediaType: string) => {
  return (await api.get(`/trending/${mediaType}/week`)) as MediaResults;
};

export const fetchGenres = async (mediaType: string) => {
  return (await api.get(`/genre/${mediaType}/list`)) as Genres;
};

export const fetchMediaByGenre = async (mediaType: string, genreId: number) => {
  return (await api.get(`/discover/${mediaType}`, {
    params: { with_genres: genreId, page: 1 }
  })) as MediaResults;
};

export const fetchMediaDetails = async (mediaType: string, mediaId: number) => {
  return (await api.get(`/${mediaType}/${mediaId}`)) as MediaInfo;
};

export const fetchSearch = async (query: string, page: string) => {
  return (await api.get(`/search/multi`, {
    params: { query, page }
  })) as MediaResults;
};
