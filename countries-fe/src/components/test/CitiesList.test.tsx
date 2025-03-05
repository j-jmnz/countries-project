import { render, screen } from '@testing-library/react';
import CitiesList from '../cities/CitiesList';
import { City } from '../../types';
import { mockCities } from './mocks';

jest.mock('../cities/CityCard', () => {
    return function MockCityCard({ city }: { city: City }) {
        return <div>{city.name}</div>;
    };
});

describe('CitiesList component', () => {
    it('should render a list of cities', () => {
        render(<CitiesList cities={mockCities} />);

        mockCities.forEach(city => {
            expect(screen.getByText(city.name)).toBeInTheDocument();
        });
    });

    it('should render nothing when cities array is empty', () => {
        const { container } = render(<CitiesList cities={[]} />);
        expect(container.firstChild).toBeEmptyDOMElement();
    });
});
