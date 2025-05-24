import { useRef, useEffect } from 'react';

const useFocus = (triggerKey?: number | null) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current || triggerKey === null) {
      isInitialMount.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      headingRef.current?.focus();
    }, 100);

    return () => clearTimeout(timeout);
  }, [triggerKey]);

  return { headingRef };
};

export default useFocus;
