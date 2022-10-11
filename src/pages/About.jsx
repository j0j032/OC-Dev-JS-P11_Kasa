import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Dropdown from '../components/Dropdown/Dropdown'
import Loader from '../components/Loader/Loader'
import bannerCover from '../assets/img/bannerCover2.jpg'
import {useQuery} from 'react-query'
import {getLodging} from '../apiHandler'

const About = () => {
	const url = '../data/values.json'
	const {data, isLoading, error} = useQuery(['values'], () => getLodging(url))
	if (error) return <span>Oups il y a eu un problème</span>
	return isLoading ? (<Loader/>) : (
		<div>
			<Header/>
			<main>
				<div className='banner banner--about'>
					<img src={bannerCover} alt='paysage'/>
				</div>
				<div className='dropdowns-container'>
					<Dropdown value={'Fiabilité'} content={data.fiability}/>
					<Dropdown value={'Respect'} content={data.respect}/>
					<Dropdown value={'Service'} content={data.service}/>
					<Dropdown value={'Sécurité'} content={data.security}/>
				</div>
			</main>
			<Footer/>
		</div>
	)
}

export default About
