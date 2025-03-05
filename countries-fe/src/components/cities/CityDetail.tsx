import React from 'react';

interface CityDetailProps {
    label: string;
    value: string;
    iconClass?: string;
}

const CityDetail: React.FC<CityDetailProps> = ({ label, value, iconClass }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                {iconClass && (
                    <span
                        className={`${iconClass} text-primary mr-2 w-5 text-center`}
                    ></span>
                )}
                <span className='font-medium text-gray-700'>{label}</span>
            </div>
            <span className='text-gray-900'>{value}</span>
        </div>
    );
};

export default CityDetail;
