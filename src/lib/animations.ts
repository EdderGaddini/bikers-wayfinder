
import { useEffect, useRef, useState } from 'react';

// Hook to detect when an element is visible in the viewport
export const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isInView };
};

// Hook to apply staggered animations to multiple elements
export const useStaggeredAnimation = (
  count: number, 
  baseDelay = 50, 
  staggerDelay = 100
) => {
  return Array.from({ length: count }, (_, i) => baseDelay + i * staggerDelay);
};
