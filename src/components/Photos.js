import React from "react";

export const Photos = ({ handleLoad, loading }) => {
	return (
		<button disabled={loading} onClick={handleLoad}>
			Load photos
		</button>
	);
};