import {useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setLodgingsData} from '../features/lodging.slice'

const urlLodging = './data/lodging.json'

export const useGetData = (url = urlLodging, filter) => {
	const dispatch = useDispatch()
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	
	useEffect(() => {
		setLoading(true)
		axios
			.get(url)
			.then((res) => dispatch(setLodgingsData(filter ? res.data[filter.method](filter.callback) : res.data)))
			.catch((error) => {
				console.log(error)
				setError(error)
			})
			.finally(() => {
				setLoading(false)
				
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return {isLoading, error}
}
