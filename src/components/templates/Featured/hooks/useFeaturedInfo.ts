import { loadReelInfo, loadReels } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

import { FeaturedInfo } from '@/models';

// Carrega os reels em destaque e retorna os dados de reel aléatorio
const loadFeatured = async () => {
  const reels = await loadReels({ mediaType: 'movie' });

  const reelInfo = await loadReelInfo(
    reels.results[Math.floor(Math.random() * reels.results.length)]
  );

  return reelInfo;
};

export const useFeaturedInfo = () => {
  const { data: featured, isLoading } = useQuery<FeaturedInfo>({
    queryKey: ['featured'],
    queryFn: () => loadFeatured(),
    staleTime: 7 * 24 * 60 * 60 * 1000 // 7 dias
  });

  return { featured, isLoading };
};
