import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo/fullLogo.svg'

const Header = () => {
	return (
		<header className='header__container'>
			<NavLink to='/'>
				<img className='header__logo' src={logo}
					 alt="Kasa, location d'appartement entre particulier"/>
			</NavLink>
			<nav>
				<ul className='header__nav'>
					<NavLink to='/'
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>Accueil</li>
					</NavLink>
					<NavLink to='/about'
							 className={(nav) => (nav.isActive ? 'header__nav-link--active' : 'header__nav-link')}>
						<li>A propos</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	)
}

export default Header
