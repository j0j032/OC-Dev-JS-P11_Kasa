import React from 'react'
import Header from '../components/Header/Header'
import {useGetData} from '../components/api'
import Footer from '../components/footer/Footer'
import Dropdown from '../components/Dropdown/Dropdown'
import Loader from '../components/loader/Loader'

const About = () => {
	const {data, isLoading, error} = useGetData('../data/values.json')
	const {fiability, security, respect, service} = data
	if (error) return <span>Oups il y a eu un problème</span>
	return isLoading ? (<Loader/>) : (
		<div>
			<Header/>
			<main>
				<div className={'banner banner--about'}>
					<img src={`./bannerCover2.jpg`} alt={'paysage'}/>
				</div>
				<div className={'dropdowns-container'}>
					<Dropdown value={'Fiabilité'} content={fiability}/>
					<Dropdown value={'Respect'} content={respect}/>
					<Dropdown value={'Service'} content={service}/>
					<Dropdown value={'Sécurité'} content={security}/>
				</div>
			</main>
			<Footer/>
		</div>
	)
}

export default About
