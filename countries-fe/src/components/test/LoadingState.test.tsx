import { render, screen } from '@testing-library/react';
import LoadingState from '../LoadingState';

describe('LoadingState component', () => {
    it('should render loading messages correctly', () => {
        const { unmount } = render(<LoadingState />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        unmount();
    });
});
