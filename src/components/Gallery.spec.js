import { render, screen, fireEvent } from '@testing-library/react';
import { Gallery } from './Gallery';
import axios from 'axios';

const mockData = {
    data: [
        {
            albumId: 1,
            id: 1,
            title: "matheus",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
            albumId: 1,
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/771796",
            thumbnailUrl: "https://via.placeholder.com/150/771796"
        },
        {
            albumId: 1,
            id: 3,
            title: "officia porro iure quia iusto qui ipsa ut modi",
            url: "https://via.placeholder.com/600/24f355",
            thumbnailUrl: "https://via.placeholder.com/150/24f355"
        },
        {
            albumId: 1,
            id: 4,
            title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            url: "https://via.placeholder.com/600/d32776",
            thumbnailUrl: "https://via.placeholder.com/150/d32776"
        }
    ]
};

jest.mock('axios');


test.only('renders Gallery', () => {
	render(<Gallery />);
	const button = screen.getByText('Load photos');
	expect(button).toBeInTheDocument();
});

test.only('renders Gallery onbutton click', async () => {
    axios.get.mockResolvedValue(mockData);
	render(<Gallery />);
	const button = screen.getByText('Load photos');
	fireEvent.click(button);
	const image = await screen.findByAltText('matheus');
    expect(image).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
});
