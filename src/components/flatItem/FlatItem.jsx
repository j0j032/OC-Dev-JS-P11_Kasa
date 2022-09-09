import React from 'react'
import {NavLink} from 'react-router-dom'

const FlatItem = ({flat}) => {
	const {id, title, cover} = flat
	return (
		<NavLink to={`/logement/${id}`}>
			<li className={'flat-item'}>
				<img src={cover} alt={`logement ${title}`}/>
				<span>{title}</span>
			</li>
		</NavLink>
	)
}

export default FlatItem
