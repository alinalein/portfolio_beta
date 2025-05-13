import { useEffect, useState } from 'react';

const useDeviceWidth = (breakpoint: number = 1050): boolean => {
    const [isWide, setIsWide] = useState(window.innerWidth > breakpoint);

    useEffect(() => {
        const handleResize = (): void =>
            setIsWide(window.innerWidth > breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isWide;
};

export default useDeviceWidth;
