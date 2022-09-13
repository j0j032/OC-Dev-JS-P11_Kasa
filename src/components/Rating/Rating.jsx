import React from 'react'
import starFilled from '../../assets/icons/starFilled.svg'
import starEmpty from '../../assets/icons/starEmpty.svg'

const Rating = ({rating}) => {
	const range = [1, 2, 3, 4, 5]
	return (
		<div className='raiting-container'>
			{range.map((rangeElem) =>
				rating >= rangeElem ? (
					<img className='stars' key={rangeElem.toString()} src={starFilled}
						 alt={'note' +
							 'remplie'}/>
				) : <img className='stars' key={rangeElem.toString()} src={starEmpty}
						 alt='note vide'/>
			)}
		</div>
	)
}

export default Rating
