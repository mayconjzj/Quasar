import { Genres } from '@/@types/Genres';
import { MediaCredits } from '@/@types/MediaCreditis';
import { MediaDetails } from '@/@types/MediaDetails';
import { MediaResults } from '@/@types/mediaResults';
import { MediaTrailers } from '@/@types/MediaTrailers';
import { api } from '@/services/api';

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
  return (await api.get(`/${mediaType}/${mediaId}`)) as MediaDetails;
};

export const fetchMediaCredits = async (mediaType: string, mediaId: number) => {
  return (await api.get(`/${mediaType}/${mediaId}/credits`)) as MediaCredits;
};

export const fetchMediaTrailers = async (
  mediaType: string,
  mediaId: number
) => {
  return (await api.get(`/${mediaType}/${mediaId}/videos`)) as MediaTrailers;
};

export const fetchSearch = async (query: string, page: string) => {
  return (await api.get(`/search/multi`, {
    params: { query, page }
  })) as MediaResults;
};

export const fetchMoviesAndSeries = async (mediaType: string) => {
  return (await api.get(`/discover/${mediaType}`)) as MediaResults;
};
