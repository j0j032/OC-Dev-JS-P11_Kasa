import React from 'react'

const Rating = ({rating}) => {
	const range = [1, 2, 3, 4, 5]
	return (
		<div className={'raiting-container'}>
			{range.map((rangeElem) =>
				rating >= rangeElem ? (
					<img className={'stars'} key={rangeElem.toString()} src={'../starFilled.svg'}
						 alt={'note' +
							 'remplie'}/>
				) : <img className={'stars'} key={rangeElem.toString()} src={'../starEmpty.svg'}
						 alt={'note vide'}/>
			)}
		</div>
	)
}

export default Rating
