import { render, screen, fireEvent } from '@testing-library/react';
import { Photos } from './Photos';

test('renders Photo', () => {
	render(<Photos />);
	const button = screen.getByText('Load photos');
	expect(button).toBeInTheDocument();
});

test('renders Photo disabled', () => {
	render(<Photos loading={true} />);
	const button = screen.getByText('Load photos');
	expect(button).toBeDisabled();
});

test('renders Photo onClick', () => {
	const handleLoad = jest.fn();
	render(<Photos handleLoad={handleLoad} />);
	fireEvent.click(screen.getByText('Load photos'));
	expect(handleLoad).toHaveBeenCalled();
});
