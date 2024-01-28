import { loadReelInfo, loadReels } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

const loadFeatured = async () => {
  const reels = await loadReels({ mediaType: 'movie' });

  const reelRandom = await Promise.all(reels.results);
  console.log(reelRandom);

  const reelInfo = await loadReelInfo(
    reelRandom[Math.floor(Math.random() * reelRandom.length)]
  );

  return reelInfo;
};

export const useFeatured = () => {
  const { data: featured, isLoading } = useQuery({
    queryKey: ['featured'],
    queryFn: () => loadFeatured()
  });

  return { featured, isLoading };
};
