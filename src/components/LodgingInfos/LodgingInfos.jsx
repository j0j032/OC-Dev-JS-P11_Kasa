import React from 'react'
import Rating from '../Rating/Rating'

const LodgingInfos = ({lodging}) => {
	const {id, title, location, rating, host: {name, picture}} = lodging
	
	return (
		<div className='infos'>
			<div className='infos-1'>
				<div>
					<h1 className='infos__title'>{title}</h1>
					<p className='infos__location'>{location}</p>
				</div>
				<div className='infos__tags'>
					{
						lodging.tags.map((tag) => <span className='infos__tag'
														key={`${id}-${tag}`}>{`${tag} `}</span>)
					}
				</div>
			</div>
			<div className='infos-2'>
				<div className='infos__identity'>
					<p className='infos__identity--name'>{name}</p>
					<img className='infos__identity--profilePic' src={picture} alt={name}/>
				</div>
				<Rating rating={rating}/>
			</div>
		
		</div>
	)
}

export default LodgingInfos
