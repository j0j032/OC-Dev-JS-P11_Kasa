import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import bannerCover from '../assets/img/bannerCover1.jpg'
import {getLodging} from '../apiHandler'
import {useQuery} from 'react-query'
import Gallery from '../components/Gallery/Gallery'
import Loader from '../components/Loader/Loader'

const Home = () => {
	const url = '../data/lodging.json'
	const {data, isLoading, error} = useQuery(['lodging'], () => getLodging(url))
	const displayError = error && <p>Une erreure est survenue</p>
	
	return (
		<div>
			<Header/>
			<main>
				<div className='banner'> {/*style in app.scss*/}
					<img src={bannerCover} alt='paysage'/>
					<span>Chez vous, partout et ailleurs</span>
				</div>
				{displayError}
				{isLoading ? (<Loader/>) : (
					<Gallery lodgings={data}/>
				)}
			</main>
			<Footer/>
		</div>
	)
}

export default Home
