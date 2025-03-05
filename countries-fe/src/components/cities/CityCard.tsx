import React from 'react';
import { City } from '../../types';
import LandmarksList from './LandmarksList';
import CityDetails from './CityDetails';

interface CityCardProps {
    city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
    return (
        <div className='bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1'>
            <div className='p-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-1'>
                    {city.name}
                </h2>
                <p className='text-sm text-gray-500 mb-4 italic'>
                    {city.name_native}
                </p>

                <div className='mb-5'>
                    <CityDetails city={city} />
                </div>
            </div>

            <div className='bg-gray-50 p-5 border-t border-gray-100'>
                <h3 className='text-md font-semibold text-gray-800 mb-3 flex items-center'>
                    <span className='fas fa-landmark text-primary mr-2'></span>
                    Landmarks
                </h3>
                <LandmarksList landmarks={city.landmarks} />
            </div>
        </div>
    );
};

export default CityCard;
