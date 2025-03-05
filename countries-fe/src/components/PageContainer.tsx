import { ReactNode } from 'react';

interface PageContainerProps {
    children: ReactNode;
    title: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, title }) => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-primary/10 via-white to-primary/5'>
            <div className='max-w-7xl mx-auto p-4 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 min-h-screen'>
                <header className='mb-12 sm:mb-16'>
                    <h1 className='text-4xl sm:text-5xl font-bold text-center text-gray-900 tracking-tight relative mb-10'>
                        <span className='relative inline-block'>
                            {title}
                            <span className='absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full transform scale-x-75 mx-auto'></span>
                        </span>
                    </h1>
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default PageContainer;
