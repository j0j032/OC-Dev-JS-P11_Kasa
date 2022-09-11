import FlatItem from '../flatItem/FlatItem'
import {useGetData} from '../api'
import Loader from '../loader/Loader'

const FlatList = () => {
	const {data, isLoading, error} = useGetData()
	
	if (error) return <span>Oups, il y a eu un problème</span>
	
	return (
		<div className={'flat-item__container'}>
			{isLoading ? (<Loader/>) : (
				<ul className={'flat-item__repeater'}>
					{
						data.map((flat) => (
							<FlatItem key={flat.id} flat={flat}/>
						))
					}
				</ul>
			)}
		</div>
	)
}

export default FlatList
