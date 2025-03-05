import { render, screen } from '@testing-library/react';
import ErrorState from '../ErrorState';

describe('ErrorState component', () => {
    it('should render the error message', () => {
        const errorMessage = 'Test error message';
        render(<ErrorState error={errorMessage} />);

        expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });

    it('should handle empty error message', () => {
        render(<ErrorState error='' />);
        expect(screen.getByText('Error:')).toBeInTheDocument();
    });
});
