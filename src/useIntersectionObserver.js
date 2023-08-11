import { useState, useEffect, useRef } from "react";

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (observedRef.current) {
      observer.observe(observedRef.current);
    }

    return () => {
      if (observedRef.current) {
        observer.unobserve(observedRef.current);
      }
    };
  }, [options]);

  return [observedRef, isIntersecting];
}

export default useIntersectionObserver;
