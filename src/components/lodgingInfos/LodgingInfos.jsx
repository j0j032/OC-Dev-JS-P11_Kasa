import React from 'react'
import Rating from '../rating/Rating'

const LodgingInfos = ({lodging}) => {
	const {id, title, location, rating, host: {name, picture}} = lodging
	
	return (
		<div>
			<h1>{title}</h1>
			<p>{location}</p>
			{
				lodging.tags.map((tag) => <span key={`${id}-${tag}`}>{`${tag} `}</span>)
			}
			<p>{name}</p>
			<img src={picture} alt={name}/>
			<Rating rating={rating}/>
		
		</div>
	)
}

export default LodgingInfos
