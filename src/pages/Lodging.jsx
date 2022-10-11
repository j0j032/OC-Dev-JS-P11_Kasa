import React from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LodgingInfos from '../components/LodgingInfos/LodgingInfos'
import Carrousel from '../components/Carrousel/Carrousel'
import Loader from '../components/Loader/Loader'
import Dropdown from '../components/Dropdown/Dropdown'
import Error404Page from './Error404Page'
import {useQuery} from 'react-query'
import {getLodging} from '../apiHandler'

const Lodging = () => {
	const {id} = useParams()
	const url = '../data/lodging.json'
	const findById = {
		method: 'find',
		callback: (item) => item.id === id
	}
	const {data, isLoading, error} = useQuery(['lodgingById'], () => getLodging(url, findById))
	
	if (error || data === undefined) return (
		<div>
			<Error404Page/>
		</div>
	)
	return isLoading ? (<Loader/>) : (
		<div>
			<Header/>
			<main>
				<Carrousel lodging={data}/>
				<LodgingInfos lodging={data}/>
				<div className='toggle__section'>
					<Dropdown value='Description' content={data.description}/>
					<Dropdown value='Équipements' content={data.equipments}/>
				</div>
			</main>
			<Footer/>
		</div>
	)
}

export default Lodging
