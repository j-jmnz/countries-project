import { useCities } from './hooks/useCities';
import PageContainer from './components/PageContainer';
import CitiesList from './components/cities/CitiesList';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';

function App() {
    const { cities, isLoading, error } = useCities();

    if (isLoading) {
        return <LoadingState message='Loading cities...' />;
    }

    if (error) {
        return <ErrorState error={error} />;
    }

    return (
        <PageContainer title='Cities Around the World'>
            <CitiesList cities={cities} />
        </PageContainer>
    );
}

export default App;
