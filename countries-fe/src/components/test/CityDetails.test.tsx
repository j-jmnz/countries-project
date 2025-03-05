import { render, screen } from '@testing-library/react';
import CityDetails from '../cities/CityDetails';
import { mockCities } from './mocks';

describe('CityDetails', () => {
    it('renders all city details correctly', () => {
        render(<CityDetails city={mockCities[0]} />);

        const expectedLabels = [
            'Country',
            'Continent',
            'Population',
            'Founded',
        ];

        expectedLabels.forEach(label => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });
});
