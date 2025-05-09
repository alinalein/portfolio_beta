import { useEffect } from 'react';

const usePersistToLocalStorage = (key, value) => {
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);
};

export default usePersistToLocalStorage;
