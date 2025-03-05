import React from 'react';

interface ErrorStateProps {
    error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
    return (
        <div className='flex justify-center items-center min-h-screen text-lg text-red-500'>
            Error: {error}
        </div>
    );
};

export default ErrorState;
