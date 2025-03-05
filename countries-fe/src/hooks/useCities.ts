import { useState, useEffect } from 'react';
import { City } from '../types';

export const useCities = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCities = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch('http://localhost:3000/cities');

            if (!response.ok) {
                throw new Error(
                    `Error ${response.status}: ${response.statusText}`
                );
            }

            const data = await response.json();
            setCities(data);
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : 'Failed to fetch cities';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCities();
    }, []);

    return {
        cities,
        isLoading,
        error,
        refetch: fetchCities,
    };
};
