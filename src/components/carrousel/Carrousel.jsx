import React, {useState} from 'react'


const Carrousel = ({lodging}) => {
	const {pictures, title} = lodging
	const [currentPicture, setCurrentPicture] = useState(0)
	const nextPicture = () => (currentPicture < pictures.length - 1) ? setCurrentPicture(currentPicture + 1) : (setCurrentPicture(0))
	const prevPicture = () => (currentPicture === 0) ? setCurrentPicture(pictures.length - 1) : (setCurrentPicture(currentPicture - 1))
	return (
		<div className={'carrousel'}>
			<img className={'carrousel__img'} src={pictures[currentPicture]}
				 alt={`${title} n° ${currentPicture + 1}`}/>
			<span className={'carrousel__arrow--left'} onClick={() => prevPicture()}>
				<img src={'../arrowLeft.svg'} alt={'précédent'}/>
			</span>
			<span className={'carrousel__arrow--right'} onClick={() => nextPicture()}>
				<img src={'../arrowRight.svg'} alt={'suivant'}/>
			</span>
		</div>
	)
}

export default Carrousel
