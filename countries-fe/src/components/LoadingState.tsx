import React from 'react';

interface LoadingStateProps {
    message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
    message = 'Loading...',
}) => {
    return (
        <div className='flex justify-center items-center min-h-screen text-lg'>
            {message}
        </div>
    );
};

export default LoadingState;
