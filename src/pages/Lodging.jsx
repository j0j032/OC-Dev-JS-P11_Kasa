import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import LodgingInfos from '../components/lodgingInfos/LodgingInfos'

const Lodging = () => {
	const {id} = useParams()
	const [lodging, setLodging] = useState({})
	const url = '../data/flats.json'
	useEffect(() => {
		axios.get(url).then((res) => setLodging(res.data.find((el) => el.id === id)))
	}, [])
	
	return (
		<div>
			<Header/>
			{/*<Carrousel lodging={lodging}/>*/}
			<LodgingInfos lodging={lodging}/>
			<Footer/>
		</div>
	)
}

export default Lodging
