import { renderHook, waitFor } from '@testing-library/react';
import { useCities } from '../useCities';
import { mockCities } from '../../test/mocks';

describe('useCities hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch cities successfully', async () => {
        (window.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockCities,
        });

        const { result } = renderHook(() => useCities());

        expect(result.current.isLoading).toBe(true);
        expect(result.current.cities).toEqual([]);
        expect(result.current.error).toBeNull();

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.cities).toEqual(mockCities);
        expect(result.current.error).toBeNull();

        expect(window.fetch).toHaveBeenCalledTimes(1);
        expect(window.fetch).toHaveBeenCalledWith(
            'http://localhost:3000/cities'
        );
    });

    it('should handle fetch error', async () => {
        const errorMessage = 'Network error';
        (window.fetch as jest.Mock).mockRejectedValueOnce(
            new Error(errorMessage)
        );

        const { result } = renderHook(() => useCities());

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.cities).toEqual([]);
        expect(result.current.error).toBe(errorMessage);

        expect(window.fetch).toHaveBeenCalledTimes(1);
    });
});
