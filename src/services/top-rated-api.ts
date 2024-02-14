import { fetchTrending, fetchMediaDetails } from './api-calls';

export async function fetchTopRated(mediaType: string) {
  const trendings = await fetchTrending(mediaType);
  const randomMedia =
    trendings.results[Math.floor(Math.random() * trendings.results.length)];

  return await fetchMediaDetails(mediaType, randomMedia.id);
}
