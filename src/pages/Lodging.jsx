import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'

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
			<img src={lodging.cover} alt={lodging.title}/>
			<h1>{lodging.title}</h1>
			<Footer/>
		</div>
	)
}

export default Lodging
