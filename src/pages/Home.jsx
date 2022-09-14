import React from 'react'
import Header from '../components/Header/Header'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'
import bannerCover from '../assets/img/bannerCover1.jpg'
import {useGetData} from '../components/api'
import Loader from '../components/Loader/Loader'

const Home = () => {
	
	const {data, isLoading, error} = useGetData()
	if (error) return <span>Oups, il y a eu un problème</span>
	
	return (
		<div>
			<Header/>
			<main>
				<div className='banner'> {/*style in app.scss*/}
					<img src={bannerCover} alt='paysage'/>
					<span>Chez vous, partout et ailleurs</span>
				</div>
				{isLoading ? (<Loader/>) : (
					<Gallery lodgings={data}/>
				)}
			</main>
			<Footer/>
		</div>
	)
}

export default Home
