import React, {useState} from 'react'


const Carrousel = ({lodging}) => {
	const {pictures, title} = lodging
	const [currentPicture, setCurrentPicture] = useState(0)
	const nextPicture = () => (currentPicture < pictures.length - 1) ? setCurrentPicture(currentPicture + 1) : (setCurrentPicture(0))
	const prevPicture = () => (currentPicture === 0) ? setCurrentPicture(pictures.length - 1) : (setCurrentPicture(currentPicture - 1))
	return (
		<div>
			<img src={pictures[currentPicture]} alt={`${title} n° ${currentPicture + 1}`}/>
			<span onClick={() => prevPicture()}>BACK</span>
			<span onClick={() => nextPicture()}>NEXT</span>
		</div>
	)
}

/*const Carrousel = ({lodging}) => {
	const {pictures} = lodging
	return (
		<div>
			<img src={pictures[0]}/>
			<span>BACK</span>
			<span>NEXT</span>
		</div>
	)
}*/


export default Carrousel
