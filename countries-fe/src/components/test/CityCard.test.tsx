import { render, screen } from '@testing-library/react';
import CityCard from '../cities/CityCard';
import { mockCities } from './mocks';

describe('CityCard component', () => {
    it('should render city information correctly', () => {
        const city = mockCities[0];
        render(<CityCard city={city} />);

        expect(screen.getByText(city.name)).toBeInTheDocument();
        expect(screen.getByText(city.name_native)).toBeInTheDocument();

        city.landmarks.forEach(landmark => {
            expect(screen.getByText(landmark)).toBeInTheDocument();
        });
    });
});
