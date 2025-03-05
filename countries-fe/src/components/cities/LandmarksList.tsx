import React from 'react';

interface LandmarksListProps {
    landmarks: string[];
}

const LandmarksList: React.FC<LandmarksListProps> = ({ landmarks }) => {
    return (
        <ul className='space-y-2'>
            {landmarks.map((landmark, index) => (
                <li key={index} className='flex items-start'>
                    <span className='text-primary mr-2 mt-0.5'>•</span>
                    <span className='text-gray-700'>{landmark}</span>
                </li>
            ))}
        </ul>
    );
};

export default LandmarksList;
