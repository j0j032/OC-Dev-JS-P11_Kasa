import GalleryItem from '../GalleryItem/GalleryItem'
import {useSelector} from 'react-redux'

const Gallery = () => {
	const lodgings = useSelector(state => state.lodgings.lodgings)
	
	return (
		<div className='gallery-item__container'>
			<ul className='gallery-item__repeater'>
				{
					lodgings.map((lodging) => (
						<GalleryItem key={lodging.id} flat={lodging}/>
					))
				}
			</ul>
		</div>
	)
}

export default Gallery
