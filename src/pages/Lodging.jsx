import React from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import LodgingInfos from '../components/lodgingInfos/LodgingInfos'
import Carrousel from '../components/carrousel/Carrousel'
import {useGetData} from '../components/api'
import Loader from '../components/loader/Loader'
import Dropdown from '../components/Dropdown/Dropdown'

const Lodging = () => {
	
	const {id} = useParams()
	const findById = {
		method: 'find',
		callback: (item) => item.id === id
	}
	const {data, isLoading, error} = useGetData('../data/flats.json', findById)
	
	if (error) return <span>Oups il y a eu un problème</span>
	
	return isLoading ? (<Loader/>) : (
		<div>
			<Header/>
			<Carrousel lodging={data}/>
			<LodgingInfos lodging={data}/>
			<Dropdown value={'Description'} content={data.description}/>
			<Dropdown value={'Equipements'} content={data.equipments}/>
			<Footer/>
		</div>
	)
}

export default Lodging
