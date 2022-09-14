import React from 'react'
import {NavLink} from 'react-router-dom'

const GalleryItem = ({flat}) => {
	const {id, title, cover} = flat
	return (
		<NavLink to={`/logement/${id}`}>
			<li className='gallery-item'>
				<img src={cover} alt={`logement ${title}`}/>
				<div className='blur-bg'>
					<span>{title}</span>
				</div>
			</li>
		</NavLink>
	)
}

export default GalleryItem
