import React from 'react';
import { City } from '../../types';
import CityDetail from './CityDetail';

interface CityDetailsProps {
    city: City;
}

const CityDetails: React.FC<CityDetailsProps> = ({ city }) => {
    return (
        <div className='space-y-3'>
            <CityDetail
                label='Country'
                value={city.country}
                iconClass='fas fa-globe-americas'
            />
            <CityDetail
                label='Continent'
                value={city.continent}
                iconClass='fas fa-map'
            />
            <CityDetail
                label='Population'
                value={Number(city.population).toLocaleString()}
                iconClass='fas fa-users'
            />
            <CityDetail
                label='Founded'
                value={city.founded}
                iconClass='fas fa-calendar-alt'
            />
        </div>
    );
};

export default CityDetails;
