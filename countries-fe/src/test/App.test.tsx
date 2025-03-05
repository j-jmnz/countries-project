import { render, screen } from '@testing-library/react';
import App from '../App';
import { useCities } from '../hooks/useCities';
import { mockCities } from './mocks';

// Mock the useCities hook
jest.mock('../hooks/useCities');

describe('App component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render loading state initially', () => {
        (useCities as jest.Mock).mockReturnValue({
            cities: [],
            isLoading: true,
            error: null,
            refetch: jest.fn(),
        });

        render(<App />);

        expect(screen.getByText(/loading cities/i)).toBeInTheDocument();
    });

    it('should render error state when there is an error', () => {
        const errorMessage = 'Failed to fetch cities';

        (useCities as jest.Mock).mockReturnValue({
            cities: [],
            isLoading: false,
            error: errorMessage,
            refetch: jest.fn(),
        });

        render(<App />);

        expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });

    it('should render cities when data is loaded', async () => {
        (useCities as jest.Mock).mockReturnValue({
            cities: mockCities,
            isLoading: false,
            error: null,
            refetch: jest.fn(),
        });

        render(<App />);

        expect(screen.getByText('Cities Around the World')).toBeInTheDocument();
        expect(screen.getByText('Tokyo')).toBeInTheDocument();
    });
});
