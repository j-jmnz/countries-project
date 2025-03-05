import React from 'react';
import CityCard from './CityCard';
import { City } from '../../types';

interface CitiesListProps {
    cities: City[];
}

const CitiesList: React.FC<CitiesListProps> = ({ cities }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {cities.map(city => (
                <CityCard key={city.name} city={city} />
            ))}
        </div>
    );
};

export default CitiesList;
