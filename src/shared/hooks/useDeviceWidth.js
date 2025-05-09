import { useEffect, useState } from 'react';

const useDeviceWidth = (breakpoint = 1050) => {
    const [isWide, setIsWide] = useState(window.innerWidth > breakpoint);

    useEffect(() => {
        const handleResize = () => setIsWide(window.innerWidth > breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isWide;
};

export default useDeviceWidth;
