import { useEffect } from 'react';

const usePersistToLocalStorage = <T>(key: string, value: T): void => {
    useEffect(() => {
        try {
            const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error(`Error saving to localStorage key "${key}":`, error);
        }
    }, [key, value]);
};

export default usePersistToLocalStorage;
