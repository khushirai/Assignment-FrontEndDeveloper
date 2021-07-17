import React from 'react';

const FavoritesList = (props) => {
	const FavoriteComponent = props.favoriteComponent;

	return (
		<>
			{props.city?.map((ci, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<div
						onClick={() => props.handleFavouritesClick(ci)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavoriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default FavoritesList;
