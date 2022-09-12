import React from 'react'

const Footer = () => {
	const date = Date.now()
	const dateFormater = date => new Date(date).toLocaleDateString('fr-FR', {year: 'numeric'})
	return (
		<footer className={'footer-container'}>
			<img src={'../fullLogo-white.svg'} alt={'Kasa, location d\'appartements entre' +
				' particuliers'}/>
			<p>© {dateFormater(date)} Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
