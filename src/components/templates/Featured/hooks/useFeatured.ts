import { loadReel, loadReels } from '@/services/http';
import { useQuery } from '@tanstack/react-query';

export const useFeatured = () => {
  const { data: reels } = useQuery({
    queryKey: ['reels'],
    queryFn: () => loadReels({ mediaType: 'movie' })
  });

  const reel = reels?.results[Math.floor(Math.random() * reels.results.length)];

  const { data: featured, isLoading } = useQuery({
    queryKey: ['featured'],
    queryFn: () => loadReel({ mediaType: 'movie', id: reel.id })
  });

  return { featured, isLoading };
};
