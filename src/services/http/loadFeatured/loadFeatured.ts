import { MediaType } from '@/models';

import { loadReelInfo, loadTrending } from '..';

export const loadFeatured = async ({ mediaType }: MediaType) => {
  try {
    const reels = await loadTrending({ mediaType: mediaType });

    const reelRandom = await loadReelInfo({
      id: reels.results[Math.floor(Math.random() * reels.results.length)].id,
      mediaType
    });

    return reelRandom;
  } catch (error) {
    console.log('erro ao carregar destaque', error);
  }
};
