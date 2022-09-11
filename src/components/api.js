import {useEffect, useState} from 'react'
import axios from 'axios'

const urlLodging = './data/flats.json'

export const useGetData = (url = urlLodging, filter) => {
	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	
	useEffect(() => {
		setLoading(true)
		axios
			.get(url)
			.then((response) =>
				setData(
					filter ? response.data[filter.method](filter.callback) : response.data
				)
			)
			.catch((error) => {
				console.log(error)
				setError(error)
			})
			.finally(() => setLoading(false))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return {isLoading, data, error}
}
