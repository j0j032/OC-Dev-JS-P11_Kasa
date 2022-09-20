import React from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LodgingInfos from '../components/LodgingInfos/LodgingInfos'
import Carrousel from '../components/Carrousel/Carrousel'
import {useGetData} from '../components/api'
import Loader from '../components/Loader/Loader'
import Dropdown from '../components/Dropdown/Dropdown'
import Error404Page from './Error404Page'

const Lodging = () => {
	
	const {id} = useParams()
	const findById = {
		method: 'find',
		callback: (item) => item.id === id
	}
	const {data, isLoading, error} = useGetData('../data/lodging.json', findById)
	
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
