import { render, screen } from '@testing-library/react';
import PageContainer from '../PageContainer';

describe('PageContainer component', () => {
    it('should render the title and children', () => {
        render(
            <PageContainer title='Test Title'>
                <div>Test Content</div>
            </PageContainer>
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
});
