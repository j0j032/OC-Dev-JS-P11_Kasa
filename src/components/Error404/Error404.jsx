import React from 'react'
import {NavLink} from 'react-router-dom'

const Error404 = () => {
	return (
		<div className='error__container'>
			<h1 className='error__404'>404</h1>
			<p className='error__subtitle'>Oups! La page que vous demandez n'existe pas.</p>
			<NavLink to='/'>
				<p className='error__link'>Retourner sur la page d'accueil</p>
			</NavLink>
		</div>
	)
}

export default Error404
