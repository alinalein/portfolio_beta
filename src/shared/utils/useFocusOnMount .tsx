import { useRef, useEffect } from 'react';

const useFocusOnMount = (triggerKey?: number) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      headingRef.current?.focus();
    }, 100);
    return () => clearTimeout(timeout);
  }, [triggerKey]);

  return { headingRef };
};

export default useFocusOnMount;
