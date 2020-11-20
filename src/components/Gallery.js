import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { Photos } from "./Photos";

export const API_URL = "https://jsonplaceholder.typicode.com/photos";

const GlobalWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

const PhotosWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Photo = styled.div``;

export const Gallery = () => {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(false);

	const load = async () => {
		setLoading(true);
		try {
			const result = await axios.get(API_URL);
			setPhotos(result.data.slice(0, 10));
			setLoading(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	return (
		<GlobalWrapper>
			<Photos loading={loading} handleLoad={load} />
			<PhotosWrapper data-testid="photos-wrapper">
				{photos.map(photo => (
					<Photo key={photo.id}>
						<img src={photo.thumbnailUrl} alt={photo.title} />
					</Photo>
				))}
			</PhotosWrapper>
		</GlobalWrapper>
	);
}