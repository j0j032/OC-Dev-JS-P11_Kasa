import React from 'react'
import logo from '../../assets/logo/fullLogo-white.svg'

const Footer = () => {
	const date = Date.now()
	const dateFormater = date => new Date(date).toLocaleDateString('fr-FR', {year: 'numeric'})
	return (
		<footer className={'footer-container'}>
			<img src={logo} alt={'Kasa, location d\'appartements entre' +
				' particuliers'}/>
			<p>© {dateFormater(date)} Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
