import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FlatItem from '../flatItem/FlatItem'

const FlatList = () => {
	const [data, setData] = useState([])
	const url = './data/flats.json'
	useEffect(() => {
		axios.get(url).then((res) => setData(res.data))
	}, [])
	
	return (
		<div className={'flat-item__container'}>
			<ul className={'flat-item__repeater'}>
				{
					data.map((flat) => (
						<FlatItem key={flat.id} flat={flat}/>
					))
				}
			</ul>
		</div>
	)
}

export default FlatList
