import { loadReelInfo, loadTrending } from '..';

export const loadFeatured = async () => {
  const mediaType = 'movie';
  const reels = await loadTrending({ mediaType: mediaType });

  const reelRandom = await loadReelInfo({
    id: reels.results[Math.floor(Math.random() * reels.results.length)].id,
    mediaType: mediaType
  });

  return reelRandom;
};
