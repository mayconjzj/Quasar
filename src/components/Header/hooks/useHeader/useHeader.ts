import { useEffect, useState } from 'react';

export const useHeader = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrollActive(true) : setScrollActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollActive };
};
