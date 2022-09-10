import React from 'react'

const Rating = ({rating}) => {
	const range = [1, 2, 3, 4, 5]
	return (
		<div>
			{range.map((rangeElem) =>
				rating >= rangeElem ? (
					<img key={rangeElem.toString()} src={'../starFilled.svg'} alt={'note remplie'}/>
				) : <img key={rangeElem.toString()} src={'../starEmpty.svg'} alt={'note remplie'}/>
			)}
		</div>
	)
}

export default Rating
